import React from "react";
import RootLayout from "src/modules/layout";
import SideBar from "src/modules/menu/side-bar";
import { useRouter } from "next/router";
import { CONSULT_MENU } from "src/const/consult.const";

export default function ConsultItem() {
  const { asPath } = useRouter();

  return (
    <RootLayout title="管理咨询">
      <div className="min-h-dvh">
        <SideBar menu={CONSULT_MENU} category="管理咨询" asPath={asPath} />
        <div>管理咨询</div>
      </div>
    </RootLayout>
  );
}
