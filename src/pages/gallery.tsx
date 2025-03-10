
import React from "react";
import GalleryDialog from "../components/GalleryDialog";
import { DataSet } from "../Utils/Data";
import Image from "next/image";
import backgroundImage from "/public/DSC_008023.jpg"

export default function GalleryPage() {

  const galleryItemSource = DataSet.Gallery.map((image: { url: string }, index: number) => (
    <GalleryDialog key={index} imageUrl={image.url} currentIndex={index} />
  ))

  return (
    <div className=" w-full flex h-full flex-col pt-14 items-center">
      {/*restores scrolling to 0*/}

      <div className="flex w-full   justify-center h-[370px] items-center relative ">
        <Image
          alt=""
          src={backgroundImage}
          className="h-full w-full flex bg-yellow-200 object-cover grayscale "
        />
        <div className="flex w-full absolute h-full flex-col text-white bg-gray-900/40 items-center justify-center ">
          <p className="font-bold text-[40px] text-center  ">
            Gallery
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5 sm:px-20 my-5">

        {galleryItemSource}
      </div>

    </div>
  );
}

