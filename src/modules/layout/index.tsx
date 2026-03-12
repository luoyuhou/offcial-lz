import React from "react";
import Footer from "src/modules/layout/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import TopBar from "../menu/top-bar";

function Copyright() {
  return (
    <div className="w-full mt-4 pb-2">
      <div className="text-center">
        {"Copyright © "}
        <a href="/public">xxx.com</a> {new Date().getFullYear()} | {}
        <a href="https://beian.miit.gov.cn/" color="inherit">
          粤ICP备xxxxx号
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { pathname } = useRouter();

  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen bg-violet-100">
        <TopBar pathname={pathname} />
        <div style={{ paddingTop: "92px" }}>{children}</div>
        <Footer />
        <Copyright />
      </div>
    </main>
  );
}
