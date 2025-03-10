import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { SideMenu } from "./SideMenu";
import DonationDialog from "./DonationDialog";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Rapologo from "/public/RAPOLogo.png"
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className=" flex flex-row py-5   w-full bg-white h-fit  shadow-md fixed top-0 z-20 px-5 md:px-20  items-center justify-between ">
      {/*Drawer Button section*/}
      <section className="relative">
        <SideMenu />
      </section>
      {/*Logo Section*/}
      <section className="flex flex-row items-center relative w-full h-auto">
        <section className="absolute  left-0 w-full gap-2 flex justify-center items-center md:w-fit sm:justify-center">
          <div className="w-[60px]  h-[60px] overflow-hidden flex relative bg-white rounded-full items-center justify-center ">
            <Image
              src={Rapologo}
              alt="RAPOLOGO"
              className="w-[50px] h-[50px] object-contain"
            />
          </div>

          <p className=' text-blue-900 text-[25px] font-extrabold '>R.A.P.O</p>
        </section>
        {/*Menu Button Section*/}
        <section className="md:flex space-x-6 hidden w-full justify-center text-sm">
          <Link href="/" className="hover:text-blue-800 font-semibold">
            Home
          </Link>

          <Link href="/programs" className="hover:text-blue-800 font-semibold">
            Programs
          </Link>
          {/* <Link to="/Stories" className="hover:text-blue-800 font-semibold">
            Stories
          </Link> */}
          <Link href="/gallery" className="hover:text-blue-800 font-semibold">
            Gallery
          </Link>
          {/* <Link to="/stories" className="hover:text-blue-700 font-semibold">
            Book-Shop
          </Link> */}


          <DropDownMenu />
        </section>
        <section className="absolute right-0 space-x-6 flex flex-row items-center ">
          <DonationDialog />
          {/* <button

            className="uppercase text-sm hidden gap-2 md:flex items-center border-2  border-blue-800  h-[40px] px-5 rounded-lg w-fit text-blue-800 font-bold"
          >
            <p> Sign In</p>
          </button> */}
        </section>

      </section>
    </nav>
  );
}

function DropDownMenu() {
  return (
    <Menu as="div" className="relative flex ">
      <MenuButton className="hover:text-blue-800 font-semibold flex items-center">
        <p>About</p>
        <ChevronDownIcon className="w-5 h-5" />
      </MenuButton>
      <MenuItems className="text-sm absolute right-0 justify-center w-[150px] flex flex-col bg-white rounded-lg px-5 py-3 top-12 shadow-md gap-3 ">
        <MenuItem>
          {({ active }) => (
            <Link
              className={`${active && "text-blue-800"
                } flex justify-center font-semibold`}
              href="/about/who-we-are"
            >
              Who We Are
            </Link>
          )}
        </MenuItem>

        <MenuItem>
          {({ active }) => (
            <Link
              className={`${active && "text-blue-800  "
                } flex justify-center font-semibold`}
              href="/about/contact-us"
            >
              Contact Us
            </Link>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
