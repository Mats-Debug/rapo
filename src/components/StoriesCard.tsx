import Image from "next/image";
import Link from "next/link";


export function StoriesCard() {
    return (
      <Link
        className="w-full cursor-pointer bg-white hover:shadow-lg rounded-lg p-2  inline-block   "
        href={""}
      >
          <div className="flex rounded-lg  ">
        <Image alt="" src={"/src/assets/image-16-570x320.jpg"} className="h-auto max-w-full rounded-lg " />
      </div>
  
        <div className="inline-block space-y-2">
          <h1 className=" font-bold mt-2">Education to Every Child</h1>
          <p className="">
            Royal Aids Prevention Organization aims at creating a holy and
          </p>
        </div>
        <p className=" text-blue-700 text-sm mt-2">Read More</p>
      </Link>
    );
  }