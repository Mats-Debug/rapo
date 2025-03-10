import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import ProgramCard from "../ProgramCard";
import { StoriesCard } from "../StoriesCard";

interface ProgramProps {
  title: string;
  description: string;
  images: {
    url: string;
  }[];
}

interface ImageSliderProps {
  data: ProgramProps[];
}

export function ProgramsCarousel(props: ImageSliderProps) {
  const { data } = props;
  const [isOverflowing, setIsOverflowing] = useState(false);

  const slideCard = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const slid = slider.current as HTMLDivElement;
      if (slid) {
        setIsOverflowing(slid.scrollWidth < slid.clientWidth);
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const slideRight = () => {
    const slideCd = slideCard.current as HTMLDivElement;
    const slid = slider.current as HTMLDivElement;
    const totalItems = data.length as number;

    const card = slideCd.offsetWidth as number;
    const mainSlider = slid.offsetWidth as number;

    const viewedItems = Math.trunc(mainSlider / card);
    const offset = (totalItems - viewedItems) * card;

    if (slid.scrollLeft > offset) {
      slid.scrollLeft = 0;
    } else {
      slid.scrollLeft += card + 10;
    }
  };

  const slideLeft = () => {
    const slideCd = slideCard.current as HTMLDivElement;
    const slid = slider.current as HTMLDivElement;
    slid.scrollLeft -= slideCd.offsetWidth + 10;
  };

  const dataRepeater = data.map((program: ProgramProps, index: number) => (
    <div
      ref={slideCard}
      id={"slideCard"}
      key={index}
      className="snap-center snap-always sm:snap-start w-full h-full rounded-md flex items-center justify-center"
    >
      <ProgramCard title={program.title} imageUrl={program.images[0].url} description={program.description} />
    </div>
  ));

  return (
    <section className="flex flex-col w-full relative items-center justify-center">
      <div
        ref={slider}
        id="slider"
        className={
          "py-2 overflow-x-scroll scroll scroll-smooth  overflow-y-hidden scrollbar-hide w-full snap-mandatory snap-x aspect-auto grid grid-flow-col auto-cols-[calc((100%-(0px))/1)] sm:auto-cols-[calc((100%-(10px*1))/2)] lg:auto-cols-[calc((100%-(10px*2))/3)]   gap-[10px] "
        }
      >
        {dataRepeater}
      </div>
 
        <div className="flex flex-row justify-center items-center gap-5">
        <button
        className={`${
          isOverflowing == true
            ? "hidden"
            : " left-2 w-[40px] h-[40px] bg-blue-700 rounded-lg flex items-center justify-center"
        }`}
        onClick={() => {
          slideLeft();
        }}
      >
        <ArrowLongLeftIcon className="h-6 w-6 text-white " />
      </button>
      <button
        className={`${ isOverflowing == true
          ? "hidden"
          :"  right-2 w-[40px] h-[40px] bg-blue-700 rounded-lg flex items-center justify-center"}`}
        onClick={() => {
          slideRight();
        }}
      >
        <ArrowLongRightIcon className="h-6 w-6 text-white" />
      </button>
        </div>
      
    </section>
  );
}

interface StoriesProps {
  title: string;
  description: string;
  images: {
    url: string;
  }[];
}

interface StoriesCarouselProps {
  data: StoriesProps[];
}
export function StoriesCarousel(props: StoriesCarouselProps) {
  const { data } = props;
  const [isOverflowing, setIsOverflowing] = useState(false);

  const slideCard = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const slid = slider.current as HTMLDivElement;
      if (slid) {
        setIsOverflowing(slid.scrollWidth > slid.clientWidth);
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const slideRight = () => {
    const slideCd = slideCard.current as HTMLDivElement;
    const slid = slider.current as HTMLDivElement;
    const totalItems = data.length as number;

    const card = slideCd.offsetWidth as number;
    const mainSlider = slid.offsetWidth as number;

    const viewedItems = Math.trunc(mainSlider / card);
    const offset = (totalItems - viewedItems) * card;

    if (slid.scrollLeft > offset) {
      slid.scrollLeft = 0;
    } else {
      slid.scrollLeft += card + 10;
    }
  };

  const slideLeft = () => {
    const slideCd = slideCard.current as HTMLDivElement;
    const slid = slider.current as HTMLDivElement;
    slid.scrollLeft -= slideCd.offsetWidth + 10;
  };

  const dataRepeater = data.map((items: StoriesProps, index: number) => (
    <div
      ref={slideCard}
      id={"slideCard"}
      key={index}
      className="snap-center snap-always sm:snap-start w-full h-fit rounded-md flex items-center justify-center"
    >
      <StoriesCard />
    </div>
  ));

  return (
    <section className="flex flex-col w-full relative items-center justify-center">
      <div
        ref={slider}
        id="slider"
        className={
          " overflow-x-scroll scroll scroll-smooth  overflow-y-hidden scrollbar-hide w-full snap-mandatory snap-x aspect-auto grid grid-flow-col auto-cols-[calc((100%-(0px))/1)] sm:auto-cols-[calc((100%-(10px*1))/2)] lg:auto-cols-[calc((100%-(10px*2))/3)]   gap-[10px] "
        }
      >
        {dataRepeater}
      </div>
      <section
        className={`${
          isOverflowing == false
            ? "hidden"
            : "flex flex-row gap px-2 justify-between w-full absolute"
        }`}
      >
        <button
          className="w-[40px] h-[40px] bg-blue-700 rounded-lg flex items-center justify-center"
          onClick={() => {
            slideLeft();
          }}
        >
          <ArrowLongLeftIcon className="h-6 w-6 text-white " />
        </button>
        <button
          className="w-[40px] h-[40px] bg-blue-700 rounded-lg flex items-center justify-center"
          onClick={() => {
            slideRight();
          }}
        >
          <ArrowLongRightIcon className="h-6 w-6 text-white" />
        </button>
      </section>
    </section>
  );
}
