import React from 'react'
import { DataSet } from '@/Utils/Data'
import ProgramCard from '@/components/ProgramCard'
import backgrroundImage from "/public/DSC_00155.jpg"
import Image from 'next/image'
export default function ProgramsPage() {
  const programs = DataSet.Programs.map((item: any, index: number) => (
    <ProgramCard key={"card" + index} title={item.title} description={item.description} imageUrl={item.images[0].url} />
  ))
  return (
    <div className=" w-full flex h-full flex-col items-center  pt-14">
      {/*restores scrolling to 0*/}

      <div className="flex w-full justify-center h-[370px] items-center relative overflow-hidden">
        <Image
          alt=''
          src={backgrroundImage}
          className="w-full flex bg-yellow-200 object-cover  grayscale h-full "
        />
        <div className="flex w-full absolute h-full flex-col text-white bg-gray-900/40 items-center justify-center ">
          <p className="font-bold text-[40px] text-center  ">
            Programs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-20 my-5">
        {programs}
      </div>

    </div>
  )
}
