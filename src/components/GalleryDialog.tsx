import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { DataSet } from "../Utils/Data";

type GalleryDialogProps = {
  imageUrl: string;
  currentIndex:number
 
};

export default function GalleryDialog(props: GalleryDialogProps) {
  const { imageUrl,currentIndex } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  function onOpen() {
    setIsOpen(true);
    setCurrentSlide(currentIndex)
  }

  
  const onNextSlide = () => {
    setCurrentSlide((prevSlide: number) =>
      prevSlide === DataSet.Gallery.length - 1 ? 0 : prevSlide + 1
    );
  };

  const onPreviousSlide = () => {
    setCurrentSlide((prevSlide: number) =>
      prevSlide === 0 ? DataSet.Gallery.length  - 1 : prevSlide - 1
    );
  };

  const imageItemSource = DataSet.Gallery.map((image:{url:string}, index: number)=>index == currentSlide &&    
  <img
  key={"image"+index}
  className="flex h-full w-full rounded-lg object-contain "
  src={image.url}
  alt=""
/> )
  return (
    <>
      <ImageComponent
        src={imageUrl}
        onClick={() => {
          onOpen();
        }}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-0 left-0  z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm bg-gray-800/40"
          open={isOpen}
          onClose={() => {}}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="w-[40px] h-[40px] absolute right-2 md:right-10 top-5 backdrop-blur-sm bg-gray-500/70 rounded-lg flex items-center justify-center"
          >
            <XMarkIcon className="w-5 h-5 text-white " />
          </button>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/*content*/}
            <DialogPanel className="flex rounded-lg h-[80%] w-full md:w-2/3  relative  items-center">
              <div className="flex w-full h-full items-center rounded-lg  ">
              {imageItemSource}
              </div>
            </DialogPanel>
          </TransitionChild>
          <button
            className="w-[40px] h-[40px] absolute left-2 md:left-10 backdrop-blur-sm bg-gray-500/70 rounded-lg flex items-center justify-center"
            onClick={() => {onPreviousSlide()}}
          >
            <ArrowLongLeftIcon className="h-6 w-6 text-white " />
          </button>
          <button
            className="w-[40px] h-[40px]  absolute right-2 md:right-10 backdrop-blur-sm bg-gray-500/70 rounded-lg flex items-center justify-center"
            onClick={() => {onNextSlide()}}
          >
            <ArrowLongRightIcon className="h-6 w-6 text-white" />
          </button>
        </Dialog>
      </Transition>
    </>
  );
}

type ImageComponentProps = {
  src: string;
  onClick: () => void;
};
function ImageComponent(props: ImageComponentProps) {
  const { src, onClick } = props;
  return (
    <button onClick={onClick} className="relative flex group">
      <img className="flex h-auto max-w-full rounded-lg object-cover" src={src} alt="" />
      <div className=" w-full h-full object-cover  items-center justify-center  absolute hidden group-hover:flex  bg-red-300/50 rounded-lg">
        <MagnifyingGlassPlusIcon className="text-white h-8 w-8" />
      </div>
    </button>
  );
}
