import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/outline/esm/ChevronDownIcon";
import React, { Fragment, useState } from "react";

interface ComboBoxProps {
  placeHolder?: string;
  itemSource: string[];
  type?: string;
  onSelectedItem: (value: string, index: number) => void;

}
export function ComboBox(props: ComboBoxProps) {
  const { placeHolder, itemSource, onSelectedItem } = props;
const [isSelected, setIsSelected]=useState(false);
  let result: string = "";

  itemSource.forEach((val, index) => {
    if (index == 0) {
      result = val;
    }
    return result;
  });

  const [text, setText] = React.useState(result);

  function onClick(val: string, index: number) {
    setText(val);
    onSelectedItem(val, index);
    setIsSelected(true)
  }

  return (
    <Menu as="div" className="relative inline-block justify-center w-full h-[40px] group bg-gray-100 rounded-lg  ">
      <MenuButton className="flex flex-row w-full focus:outline focus:outline-2 pl-5 pr-3  focus:outline-blue-500 space-x-2 items-center justify-between rounded-md h-[40px]">
        {/* {text != "" && (
          <p className="whitespace-nowrap text-gray-400">{placeHolder}</p>
        )} */}
            {isSelected != true ?<p className="whitespace-nowrap text-gray-400">{placeHolder}</p> :   <div className="w-full flex flex-row items-center  justify-between rounded-lg h-full ">
          <p className="whitespace-nowrap">{text}</p>
          <ChevronDownIcon className=" w-4 h-4 text-gray-500 " />
        </div>}
      
      
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute  z-40 right-0 mt-2 w-full h-fit overflow-y-auto origin-top-right divide-y p-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className=" text-gray-700 h-full space-y-2 "
            aria-labelledby="dropdownDefault"
          >
            {itemSource.map((item: string, index: number) => (
              <li key={item}>
                <MenuItem>
                  <button
                    type="button"
                    onClick={() => {
                        onClick(item, index);
                    }}
                    className={`${
                      text == item ? "bg-blue-700 text-white " : " text-black  hover:bg-gray-100 "
                    }  px-4 whitespace-nowrap w-full text-left  rounded-lg h-[40px]`}
                  >
                    {item}
                  </button>
                </MenuItem>
              </li>
            ))}
          </ul>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
