import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ArrowLeftIcon,
  XMarkIcon,
  UserPlusIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import Avatars from "./Avatars.jsx";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <button className="btn btn-ghost">
                        <ArrowLeftIcon className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline space-x-4">
                        <div className="divider lg:divider-horizontal"></div>
                        <h1 className="text-xl font-semibold">
                          Document name 1
                        </h1>
                        <span className="badge bg-gray-100 p-4 rounded-md">
                          V1
                        </span>
                        <span className="badge bg-gray-100 p-4 rounded-md">
                          DOCX
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex space-x-4 items-center md:ml-6">
                      <Avatars />
                      <button className="btn btn-outline">
                        <UserPlusIcon className="h-6 w-6" />
                        Invite
                      </button>
                      <button className="btn btn-active btn-primary">
                        <ArrowDownCircleIcon className="h-6 w-6" />
                        Save Document
                      </button>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto w-full py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
