import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo, MiniLogo } from "../layout/Logo";

const navigation = [
  { name: "首页", href: "/" },
  { name: "新闻中心", href: "/news" },
  { name: "管理咨询", href: "/consult" },
  { name: "培训服务", href: "/training" },
  { name: "管理研究", href: "/research" },
  { name: "成功案例", href: "/success-cases" },
  { name: "关于我们", href: "/about-us" },
];

function checkPathnameActive(s: string, p: string) {
  const pattern = /-(.*)[?#]/;
  const arr = p.split(pattern);
  return s === arr?.[0];
}

export default function TopBar({ pathname }: { pathname: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <div className="bg-white">
        <header className="inset-x-0 top-0">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="/" className="-m-1.5 p-1.5">
                <span className="md:hidden lg:flex">
                  <Logo />
                </span>
                <span className="hidden md:flex lg:hidden">
                  <MiniLogo />
                </span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => {
                const active = checkPathnameActive(item.href, pathname);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-semibold leading-6 hover:text-blue-700 ${active ? "text-blue-700" : "text-gray-900"}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Theme
              </button>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="">
                    <MiniLogo />
                  </span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const active = checkPathnameActive(item.href, pathname);
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${active ? "text-blue-700" : "text-gray-900"}`}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                  <div className="py-6">
                    <button
                      type="button"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Theme
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </div>
  );
}
