/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");

async function build() {
  const rootDir = path.join(__dirname, "..");
  const standaloneDir = path.join(rootDir, ".next", "standalone");
  const publicDir = path.join(rootDir, "public");
  const staticDir = path.join(rootDir, ".next", "static");
  const distDir = path.join(rootDir, "dist");

  console.log("Starting packaging process...");

  // 1. Ensure standalone build exists
  if (!fs.existsSync(standaloneDir)) {
    console.error(
      'Error: .next/standalone not found. Please run "npm run build" first.',
    );
    process.exit(1);
  }

  // 2. Copy public and static files to standalone directory
  // Next.js standalone doesn't include these by default
  console.log("Copying static assets to standalone folder...");
  const targetPublic = path.join(standaloneDir, "public");
  const targetStatic = path.join(standaloneDir, ".next", "static");

  if (fs.existsSync(publicDir)) {
    fs.copySync(publicDir, targetPublic);
  }
  if (fs.existsSync(staticDir)) {
    fs.copySync(staticDir, targetStatic);
  }

  // 2.5 彻底移除 server.js 中的 chdir 问题 (pkg 环境兼容)
  console.log("Deep cleaning server.js for pkg compatibility...");
  const serverJsPath = path.join(standaloneDir, "server.js");
  if (fs.existsSync(serverJsPath)) {
    let content = fs.readFileSync(serverJsPath, "utf8");
    // 暴力移除所有 process.chdir 相关的行，Next.js standalone 模式在 pkg 中不需要它
    content = content
      .split("\n")
      .filter((line) => !line.includes("process.chdir"))
      .join("\n");
    fs.writeFileSync(serverJsPath, content);
  }

  // 3. 创建一个包装启动脚本，增加友好提示和防止闪退
  console.log("Creating wrapper entry script...");
  const wrapperScript = `
const path = require('path');
const Module = require('module');

// 修复 1: 伪造 inspector 模块，防止 Next.js 报错 ERR_INSPECTOR_NOT_AVAILABLE
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
    if (id === 'node:inspector' || id === 'inspector') {
        return {
            open: () => {},
            close: () => {},
            url: () => '',
            waitForDebugger: () => {},
            console: console
        };
    }
    return originalRequire.apply(this, arguments);
};

process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 3000;
process.env.NEXT_TELEMETRY_DISABLED = '1'; // 禁用遥测，进一步精简日志和减少依赖

// 修复 2: 在 pkg 环境中屏蔽 process.chdir
const originalChdir = process.chdir;
process.chdir = (dir) => {
    console.log('Intercepted chdir to:', dir);
    // 如果路径包含 snapshot（pkg 虚拟路径），则忽略
    if (dir.includes('snapshot')) {
        return;
    }
    try {
        originalChdir(dir);
    } catch (e) {
        console.warn('chdir failed, but continuing...', e.message);
    }
};

console.log('=======================================');
console.log('   Official LZ Server is starting...   ');
console.log('=======================================');
console.log('URL: http://localhost:' + process.env.PORT);
console.log('Press Ctrl+C to stop the server.');
console.log('');


// 捕获未捕获的错误，防止直接崩溃
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

try {
    // 启动 Next.js server
    require('./server.js');
} catch (err) {
    console.error('Failed to start server:', err);
    console.log('\\nPress any key to exit...');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
}
`;
  fs.writeFileSync(path.join(standaloneDir, "entry.js"), wrapperScript);

  // 4. 创建一个临时的 package.json，将入口指向 wrapper
  console.log("Preparing standalone package.json for pkg...");
  const standalonePackageJson = {
    name: "offcial-lz",
    version: "1.0.0",
    bin: "entry.js",
    pkg: {
      assets: ["public/**/*", ".next/**/*", "node_modules/**/*", "server.js"],
    },
  };
  fs.writeJsonSync(
    path.join(standaloneDir, "package.json"),
    standalonePackageJson,
  );

  // 4. Create a clean dist directory
  if (fs.existsSync(distDir)) {
    fs.removeSync(distDir);
  }
  fs.ensureDirSync(distDir);

  // 5. Run pkg
  console.log("Running pkg...");

  try {
    // 打包目标：Windows (x64), macOS (x64), Linux (x64)
    // 如果你需要支持 Apple Silicon (M1/M2/M3)，可以添加 node18-macos-arm64
    const targets = "node18-win-x64,node18-macos-x64,node18-linux-x64";

    console.log(`Building targets: ${targets}...`);
    execSync(
      `npx pkg .next/standalone/package.json --targets ${targets} --out-path dist`,
      {
        stdio: "inherit",
        cwd: rootDir,
      },
    );
    console.log("Successfully created all executables in /dist folder!");
  } catch (error) {
    console.error("Failed to package with pkg:", error.message);
    process.exit(1);
  }
}

// Check for fs-extra, install if missing
try {
  require("fs-extra");
  build();
} catch (e) {
  console.log("Installing fs-extra...");
  execSync("npm install fs-extra");
  build();
}
