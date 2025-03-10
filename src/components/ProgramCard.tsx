import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
export default function ProgramCard(props: ProgramCardProps) {
  const { title, description, imageUrl } = props;
  const urlTitle = title.replace(/\s+/g, "-");
  
  return (
    <Link
      href={`/programs/${urlTitle}`}    
      className="w-full h-full bg-white hover:shadow-md rounded-lg p-2  inline-block  relative "
    >
      <div className="flex rounded-lg  ">
        <Image alt="" width={500} height={500} src={imageUrl} className="h-[260px] object-cover max-w-full rounded-lg " />
      </div>
      <h1 className=" font-bold mt-2 text-[20px]">{title}</h1>
      <p className=" mt-2 line-clamp-3 mb-6">{description}</p>
      <div className="inline-flex items-center mt-2 text-blue-700 gap-2 absolute bottom-2">
        <p className=" text-sm ">More Details</p>
        <ArrowLongRightIcon className="w-5 h-5" />
      </div>
    </Link>
  );
}
