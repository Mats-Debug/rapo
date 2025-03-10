import { Transition, Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";



export function SideMenu() {
 
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="side-menu-button w-fit block md:hidden"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-0 left-0 z-50 w-full h-screen flex backdrop-blur-[1px] bg-gray-800/10"
          open={true}
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {/*content*/}
            <DialogPanel className=" bg-neutral-100 flex relative rounded-lg w-full sm:w-1/2  h-screen shadow-lg ">
              <div className="flex flex-col gap-2 p-5 w-full">
                <section className="flex flex-row justify-between">
                  <h1 className="">RAPO</h1>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className=" flex sm:hidden  w-[40px] h-[40px] bg-gray-200 items-center justify-center rounded-lg"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </section>
                <section className="flex flex-col space-y-2 w-full mt-5">
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Home"
                    url="/"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Campaigns"
                    url="/campaigns"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Gallery"
                    url="/"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Stories"
                    url="/"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Who We Are"
                    url="/"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Our Team"
                    url="/"
                  />
                  <SideMenuButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    title="Contact Us"
                    url="/"
                  />
                </section>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
interface SideMenuButtonProps {
  onClick: () => void;
  url: string;
  title: string;
}
 function SideMenuButton(props: SideMenuButtonProps) {
  const { onClick, url, title } = props;
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="flex sideMenuButton"
    >
      <Link
        href={url}
        className="flex items-center px-5 h-[40px] w-full hover:bg-blue-700 hover:text-white rounded-lg"
      >
        {title}
      </Link>
    </button>
  );
}
