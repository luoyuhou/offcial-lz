import React from "react";

export function MiniLogo() {
  return (
    <span
      style={{ fontWeight: "bold" }}
      className="text-xl bg-gradient-to-r from-green-200 to-blue-700 text-white p-2 rounded-lg"
    >
      乐 湛
    </span>
  );
}

export function Logo() {
  return (
    <span
      style={{ fontWeight: "bold", minWidth: "276px" }}
      className="inline-block text-xl bg-gradient-to-r from-green-200 to-blue-700 text-white p-2 rounded-lg"
    >
      深圳市乐湛企业服务有限公司
    </span>
  );
}
