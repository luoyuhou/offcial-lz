import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type SideBarProps = {
  title: string;
  href: string;
};

export default function SideBar(
  props: Readonly<{ menu: SideBarProps[]; category: string; asPath: string }>,
) {
  const { menu, category, asPath } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-10">
      <div className="bg-white">
        <header className="fixed inset-x-0 bottom-40 lg:inset-y-1/4">
          <nav
            className="items-center justify-between px-4 py-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1" />
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
            <div className="hidden lg:block w-[250px] bg-white">
              <p className="bg-blue-500 p-4 text-xl text-white">{category}</p>
              <hr className="mt-1" />
              {menu.map((item) => {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`block text-sm font-semibold leading-6 hover:text-blue-700 text-gray-900 py-3 pl-3 my-0.5 ${asPath === item.href ? "bg-blue-200" : ""}`}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-[60vw] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <p className="bg-blue-700 p-2 font-bold rounded-md text-white">
                  {category}
                </p>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <hr className="mt-5" />
              <div className="mt-3 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {menu.map((item) => {
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 text-gray-900 ${asPath === item.href ? "bg-blue-200" : ""}`}
                        >
                          {item.title}
                        </a>
                      );
                    })}
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
