import React from "react";
import { ECompanyName } from "src/const";

export function MiniLogo() {
  return (
    <span
      style={{ fontWeight: "bold" }}
      className="text-xl bg-gradient-to-r from-green-200 to-blue-700 text-white p-2 rounded-lg"
    >
      {ECompanyName.sort.split("").join(" ")}
    </span>
  );
}

export function Logo() {
  return (
    <span
      style={{ fontWeight: "bold", minWidth: "276px" }}
      className="inline-block text-xl bg-gradient-to-r from-green-200 to-blue-700 text-white p-2 rounded-lg"
    >
      {ECompanyName.full}
    </span>
  );
}
