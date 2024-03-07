import React from "react";

function Copyright() {
  return (
    <div>
      {"Copyright © "}
      <a href="/">xxx.com</a> {new Date().getFullYear()} | {}
      <a href="https://beian.miit.gov.cn/" color="inherit">
        粤ICP备xxxxx号
      </a>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Copyright />
    </>
  );
}
