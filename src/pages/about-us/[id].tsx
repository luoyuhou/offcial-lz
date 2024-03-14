import React from "react";
import RootLayout from "src/modules/layout";
import { useRouter } from "next/router";
import SideBar from "src/modules/menu/side-bar";
import { ABOUT_US_MENU, AboutUsPages } from "src/const/about-us.const";
import { AboutUsSection } from "src/modules/sections/about-us.section";

function AboutUs() {
  const { asPath, query } = useRouter();

  return (
    <RootLayout title="关于我们">
      <div className="min-h-dvh">
        <div className="lg:ml-[300px]">
          <div className="bg-white rounded-s m-10">
            <div className="p-10">
              <AboutUsSection page={(query as { id: AboutUsPages }).id} />
            </div>
          </div>
        </div>
        <SideBar menu={ABOUT_US_MENU} category="关于我们" asPath={asPath} />
      </div>
    </RootLayout>
  );
}

export default AboutUs;
