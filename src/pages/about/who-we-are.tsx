import React from "react";

export default function WhoWeArePage() {
  return (
    <section className=" flex flex-col gap-10 justify-center items-center mb-10">
      <div className="flex w-full   justify-center h-[370px] items-center relative ">
        <img
          src="/src/assets/campaing-4.jpg"
          className="h-full w-full flex bg-yellow-200 object-cover grayscale "
        />
        <div className="flex w-full absolute h-full text-white flex-col bg-gray-900/40 items-center justify-center ">
          <p className="font-bold text-[40px] text-center  ">Who We Are</p>
        </div>
      </div>
      <AboutUs />
    </section>
  );
}

function AboutUs() {
  return (
    <section className="w-full h-fit    relative flex px-20 flex-col items-center">
      <section className="w-full flex flex-col gap-2 text-center md:w-[80%] ">
        <h2 className="text-[30px] font-bold">About Us</h2>
        <p className="w-full ">
          Royal AIDs
          Prevention Organization is a national
          organization aiming at restoring hope to the people infected and
          affected with HIV / AIDs, orphans and the needy children through Education,
          awareness, Health and
          empowerment.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 relative items-center">
        <section className="w-full flex flex-col gap-2 text-center md:text-left ">
          <div className="flex w-full  flex-col">
            <h3 className="text-[30px] font-bold ">Our Mission</h3>
            <p className="">
              Royal AIDs Prevention Organization aims at creating a holistic and social environment for those infected and affected by HIV/AIDs, orphans and the needy  children free from stigma. It provides education, C.B.H.C, income generating projects, social and moral support so as to improve on their standards of living.

            </p>
          </div>
        </section>
        <div className="flex w-full h-full justify-end">
          <img
            src="/src/assets/background2.png"
            className="w-[70%] h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 relative items-center">
        <div className="flex w-full h-full">
          <img
            src="/src/assets/background2.png"
            className="w-[70%] h-auto object-fit"
          />
        </div>
        <section className="w-full flex flex-col gap-2 text-center md:text-left ">
          <h2 className="text-[30px] font-bold">Our Vision</h2>
          <p className="w-full">
            To have a purposeful generation of youth, children and adults of
            Uganda who are able to make informed decisions and in future live
            improved standards of living free from HIV/AIDS and live a holy life
            before God.
          </p>
        </section>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 relative items-center">
        <section className="w-full flex flex-col gap-2 text-center md:text-left ">
          <div className="flex w-full  flex-col">
            <h3 className="text-[30px] font-bold ">Our Goal</h3>
            <p className="">
            To have a purposeful generation of youths, children and adults of Uganda who are able to make informed decisions and in future live improved standards of living free from HIV/AIDS and live a holy life before God.
            </p>
          </div>
        </section>
        <div className="flex w-full h-full justify-end">
          <img
            src="/src/assets/background2.png"
            className="w-[70%] h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 relative items-center">
        <div className="flex w-full h-full">
          <img
            src="/src/assets/background2.png"
            className="w-[70%] h-auto object-fit"
          />
        </div>
        <section className="w-full flex flex-col gap-2 text-center md:text-left ">
          <h2 className="text-[30px] font-bold">AIMS AND OBJECTIVES</h2>
          <p className="w-full">
            The organization aims at achieving it’s objectives to teach prevention of HIV/ AIDs through information, counseling and programmes resulting in a life style change.
            To strive towards an HIV/AIDS competent community.
            To provide strategic empowerment of infected and affected individuals, orphans, the needy, through R.A.P.O programs.
            To sensitize the orphans a bout the importance of education
            To provide counseling and guidance  services to the families of infected by HIV/ AIDs and those that are traumatized.
          </p>
        </section>
      </section>
    </section>
  );
}
