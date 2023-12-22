import { Inter } from "next/font/google";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UiStoreProvider } from "@/stores/uiStore";

const inter = Inter({ subsets: ["latin"] });

const navigation = [{ name: "Users", href: "#", current: true }];

const AppLayout = (props: { children: JSX.Element }) => (
  <UiStoreProvider>
    <div className={`min-h-full bg-xenon-900 ${inter.className}`}>
      <Disclosure as="nav" className="border-b border-gray-200 bg-xenon-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`
                            ${
                              item.current
                                ? "border-white text-white font-light"
                                : "border-transparent text-white hover:border-gray-300 hover:text-gray-100 font-thin hover:font-light"
                            }
                            inline-flex items-center border-b-2 px-1 pt-1 text-lg font-sora`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`
                      ${
                        item.current
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                      }
                        block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
    </div>
  </UiStoreProvider>
);

export default AppLayout;
