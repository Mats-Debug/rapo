import React, { useCallback, useEffect, useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";
import educationIcon from "/public/svg/education.svg";
import healthIcon from "/public/svg/global-health.svg";
import protectionIcon from "/public/svg/protection.svg";
import { DataSet } from "../Utils/Data";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ProgramsCarousel } from "../components/Carousel/Carousel";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import becomeSponserImg from "/public/DSC_002777.jpg";
import aboutUsImg from "/public/DSC_0044.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="  w-full  h-fit  flex flex-col  space-y-10">
      {/*animate texts in hero Section */}
      <HeroSection />

      <WhatWeDoSection />
      {/*carousel */}
      <ProgramsSection />
      <AboutUs />
      {/*animate slide*/}
      <OurTeam />

      <section className="flex  w-full h-[500px]  overflow-hidden  ">
        <div className="relative w-full">
          <Image
            src={becomeSponserImg}
            alt=""
            width={1000}
            height={900}
            className="absolute w-full  object-cover h-[500px]   flex  "
          />
          <div className="flex w-full h-full absolute bg-gradient-to-r from-black ">
            <section className="flex w-full md:w-1/2 flex-col space-y-2 text-white justify-center px-5 sm:px-20">
              <h3 className="text-[30px] font-bold uppercase">Become A Sponsor</h3>
              <p className="">
                Every child deserves a healthy start Provide FREE services to
                check healthcare and prescribe basic resources like food and
                medical.
              </p>

              <Link
                href="/contact-us"
                className="uppercase text-sm flex items-center justify-center gap-2 bg-red-700 h-[40px] rounded-lg w-fit px-5 text-white font-semibold"
              >
                <CheckCircleIcon className="w-5 h-5 text-white" />{" "}
                <p> Contact Us</p>
              </Link>
            </section>
          </div>
        </div>
      </section>

      {/*restores scrolling to 0*/}

    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="w-full h-fit inline-block px-5 sm:px-20 ">
      <h3 className="text-[30px] font-bold  text-center uppercase">
        Our Programs
      </h3>
      <p className="text-center ">
        You can help lots of people by donating little.
      </p>
      <ProgramsCarousel data={DataSet.Programs} />
    </section>
  );
}


function OurTeam() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    let controls = null;
    const finalPosition = -width - 105;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: 20 * (1 - xTranslation.get() / finalPosition),
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onComplete: () => {
          setMustFinish(false);
          setReRender(!reRender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="flex w-full flex-col scrollbar-hide overflow-x-hidden">
      <div className="flex w-full justify-center flex-col items-center">
        <h1 className="text-[30px] font-bold  uppercase">Meet Our Executive Team</h1>
        <p className="w-full md:w-1/2 text-center">
          Our multinational team combines experience with passion, creativity,
          and dedication. Our team is committed to supporting the next
          generation of our nation.
        </p>
      </div>
      <motion.div
        className={"py-2 scrollbar-hide w-full flex gap-[10px] "}
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...DataSet.TeamsList, ...DataSet.TeamsList].map((item, index) => (<TeamCard key={"card" + index} name={item.name} url={item.image} title={item.title} />))}

      </motion.div>

    </section>
  );
}





interface TeamCardProp {
  name: string;
  url: string;
  title: string;
}


function TeamCard(props: TeamCardProp) {
  const { name, title, url } = props;
  return (
    <motion.div className="relative overflow-hidden h-fit min-w-[300px] md:min-w-[400px]">
      <div className="flex flex-col items-center justify-center">
        <img
          src={url}
          className="h-auto max-w-full rounded-lg "
        />
        <h3 className="flex font-bold text-lg">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>
    </motion.div>
  );
}

function WhatWeDoSection() {
  return (
    <section className="grid grid-cols-1 px-5 sm:px-20 sm:grid-cols-2 md:grid-cols-3 w-full gap-5 mt-10 text-center ">
      <div className=" flex flex-col items-center w-full gap-2">
        <Image width={100} height={100} src={healthIcon} className="w-16 h-16" alt={""} />
        <h1 className="text-[20px] font-bold">Health</h1>
        <p className="text-sm text-center">
          Every child deserves a healthy start Provide FREE services to check
          healthcare and prescribe basic resources like food and medical.
        </p>
      </div>
      <div className=" flex flex-col items-center w-full gap-2">
        <Image width={100} height={100} src={protectionIcon} alt={""} className="w-16 h-16" />
        <p className="text-[20px] font-bold">Empowerment</p>
        <p className="text-sm">
          Enhance children protection system to dealing with the prevention of
          child abuse in general, anti-bullying or prevention of child sexual
          abuse. Ensuring children live in a supportive family environment, full
          educational learning, access to justice and protection from violence,
          abuse and exploitation.
        </p>
      </div>

      <div className=" flex flex-col items-center w-full gap-2">
        <Image width={100} height={100} src={educationIcon} className="w-16 h-16" alt={""} />
        <h1 className="text-[20px] font-bold">Education</h1>
        <p className="text-sm">
          Make learning possible for children who are all ages, from
          kindergarten to high school and adults also. Provide learning
          vocational training, educational opportunities that help adults
          improve their education, and catch up with modern life
        </p>
      </div>
    </section>
  );
}

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % DataSet.heroSectionImages.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-row  relative h-screen overflow-hidden">
      {DataSet.heroSectionImages.map((imageUrl, index) => (
        <Image
          key={imageUrl.url}
          src={imageUrl.url}
          alt={`Image ${index + 1}`}
          width={6000}
          height={400}
          className={`absolute  left-0 w-full h-screen object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div className="flex w-full h-full absolute bg-gradient-to-t from-black from-2% " />

      <section className="flex flex-col absolute  md:px-20 pb-[200px] w-full justify-center md:justify-center h-full  z-10 ">
        <div className="relative inline-flex object-cover">
          {DataSet.heroSectionImages.map((item, index) => (
            <Transition
              key={index}
              show={index == currentImageIndex ? true : false}
            >
              <div className="flex absolute flex-col">
                <TransitionChild
                  enter="transition-opacity duration-300 delay-[2000ms]"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-700"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <p className=" text-md italic text-white text-center md:text-left">
                    Donate and change a life
                  </p>
                </TransitionChild>
                <TransitionChild
                  enter="transition ease-in-out duration-[3000ms] transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-500 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <h1
                    key={index}
                    className={`text-[6vw] uppercase lg:text-[60px] lg:w-2/3 font-bold text-white   text-center md:text-left `}
                  >
                    {item.title}

                  </h1>
                </TransitionChild>
                <TransitionChild
                  enter="transition ease-in-out duration-[4000ms] transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-500 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <p className=" text-md  text-white text-center md:text-left">
                    {item.subTitle}
                  </p>
                </TransitionChild>

                <TransitionChild
                  enter="transition-opacity duration-300 delay-[3000ms]"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="px-10 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:w-1/2">
                    <Link
                      href="/contact-us"
                      className="uppercase px-5 text-sm gap-2 flex items-center justify-center bg-red-600 h-[40px] rounded-lg w-full text-white font-semibold"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-white" />{" "}
                      <p>Become A Sponsor</p>
                    </Link>
                    <Link
                      href="/contact-us"
                      className="uppercase text-sm px-5 flex items-center justify-center gap-2 bg-blue-900 h-[40px] rounded-lg w-full text-white font-semibold"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-white" />{" "}
                      <p> Donate Now</p>
                    </Link>
                  </div>
                </TransitionChild>
              </div>

            </Transition>
          ))}
        </div>

        {/*Buttons*/}
      </section>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="flex  w-full h-[500px]  overflow-hidden ">
      <div className="relative w-full flex">
        <Image
          width={2000}
          height={900}
          src={aboutUsImg}
          className="absolute w-full  h-[500px]   object-cover scale-x-[-1] flex  "
          alt="about us"
        />
        <div className="flex w-full h-[500px]  top-0 absolute bg-gradient-to-l from-black justify-end ">
          <section className="flex w-full md:w-1/2 flex-col space-y-2 text-white  justify-center px-5 sm:px-20">
            <section className="w-full flex flex-col gap-2 ">
              <h2 className="text-[30px] font-bold uppercase">About Us</h2>
              <p className="w-full">
                Royal Aids Prevention Organization aims at creating a holy and
                social environment for those infected and affected by HIV/AIDs,
                Orphans and the needy children from stigma. It provides
                education, C.B.H.C, income generation projects to improve on the
                sustainability of our beneficiaries, social and moral support so
                as to improve on their standards of living.
              </p>

              <Link
                href="/contact-us"
                className="uppercase px-5 text-sm gap-2 flex items-center justify-center bg-blue-900 h-[40px] rounded-lg w-fit text-white font-semibold"
              >
                <CheckCircleIcon className="w-5 h-5 text-white" />{" "}
                <p>Read More</p>
              </Link>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
