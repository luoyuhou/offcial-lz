import React from "react";
import RootLayout from "src/modules/layout";
import SideBar from "src/modules/menu/side-bar";
import { useRouter } from "next/router";
import { CONSULT_MENU } from "src/const/consult.const";

export default function Consult() {
  const { asPath } = useRouter();

  return (
    <RootLayout>
      <div className="min-h-dvh">
        <div>Consult Page</div>
        <SideBar menu={CONSULT_MENU} category="管理咨询" asPath={asPath} />
      </div>
    </RootLayout>
  );
}
