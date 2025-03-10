import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { DataSet } from "@/Utils/Data";
import ProgramCard from "@/components/ProgramCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useForm, FormProvider, Form } from "react-hook-form";
import { TextInput, TextInput2 } from "@/components/TextInput";
import { useRouter } from "next/router";
import Image from "next/image";


interface ProgramProps {
  title: string;
  Missions: { mission: string }[];
  description: string;
  images: {
    url: string;
  }[];
}

function changeToUrl(value: string) {
  const url = value.replace(/\s+/g, "-");
  return url;
}
export default function ProgramDetails({ otherPrograms, currentProgram }: any) {
  const router = useRouter();
  const [program, setPrograms] = useState<{ title: string, Missions: [], description: string, images: [] }>();

  const { title, Missions, description, images } = currentProgram as ProgramProps;

  const programMission = currentProgram!.Missions.map(
    (pMission: { mission: string }, index: number) => (
      <div key={"Mission" + index} className=" inline-flex gap-2 items-center ">
        <ArrowRightCircleIcon className="w-6 h-6 text-red-600" />
        <p>{pMission.mission}</p>
      </div>
    )
  );

  return (

    <div className=" flex flex-col w-full px-20 pb-10 mt-20 gap-5 min-h-screen bg-neutral-100">
      <section className=" flex flex-row  gap-5 ">
        <section className="w-[60%] flex flex-col gap-5">
          <div className="w-full h-[430px]">
            <ImageSlider images={images} />
          </div>
          {/*Description*/}
          <div className="w-full bg-white  h-fit flex flex-col gap-5 p-5 rounded-lg">
            <div className="flex w-full flex-col">
              <h1 className="text-[30px] font-bold uppercase">{title}</h1>
              <p>{description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Program Mission</h1>
              {programMission}
            </div>
          </div>
        </section>
        <section className="w-[40%] bg-white  h-fit sticky top-20 gap-5 flex flex-col rounded-lg">
          <DonationSection />
        </section>
      </section>
      <OtherPrograms data={otherPrograms} />


    </div>

  );
}
interface OtherProgramsProps {
  data: ProgramProps[];
}
function OtherPrograms(props: OtherProgramsProps) {
  const { data } = props;
  const otherProgramsRepeater = data.map(
    (programs: ProgramProps, index: number) => (
      <ProgramCard
        key={"otherPrograms" + index}
        imageUrl={programs.images[0].url}
        title={programs.title}
        description={programs.description}
      />
    )
  );

  return (
    <>
      <h1 className="font-bold text-[30px] text-center">Other Programs</h1>
      <div className="w-full h-fit  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
        {otherProgramsRepeater}
      </div>
    </>
  );
}

type FormValues = {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
};

function DonationSection() {
  const methods = useForm<FormValues>();
  const {
    handleSubmit,
    setValue,
  } = methods;

  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(0);

  function onClick(value: number, _price: number) {
    setIndex(value);
    setAmount(_price);
  }

  useEffect(() => {
    if (amount != 0) {
      setValue("amount", amount);
    }

  }, [amount, setValue]);


  const onSubmit = () => {

  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className=" h-fit w-full gap-5 flex flex-col  p-5">
          <h1 className="w-full font-bold  ">Your Donation</h1>
          <section className="grid  grid-cols-5 gap-5">
            <button
              type="button"
              onClick={() => {
                onClick(1, 10);
              }}
              className={`${index == 1
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
                }px-5 h-[40px] rounded-lg `}
            >
              <p>$10</p>
            </button>
            <button
              type="button"
              onClick={() => {
                onClick(2, 25);
              }}
              className={`${index == 2
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
                }px-5 h-[40px] rounded-lg `}
            >
              $25
            </button>
            <button
              type="button"
              onClick={() => {
                onClick(3, 50);
              }}
              className={`${index == 3
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
                }px-5 h-[40px] rounded-lg `}
            >
              $50
            </button>
            <button
              type="button"
              onClick={() => {
                onClick(4, 100);
              }}
              className={`${index == 4
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
                }px-5 h-[40px] rounded-lg `}
            >
              $100
            </button>
            <button
              type="button"
              onClick={() => {
                onClick(5, 250);
              }}
              className={`${index == 5
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
                }px-5 h-[40px] rounded-lg `}
            >
              $250
            </button>
          </section>
          <div className="relative flex items-center flex-row gap-5">
            <TextInput2
              name="amount"
              type="number"
              placeHolder="Enter Amount"
              onInput={(value) => { value === "" ? setAmount(parseFloat("0")) : setAmount(parseFloat(value)) }}
            />

          </div>

          <h1 className="font-bold">Details</h1>
          <div className="w-full grid grid-cols-2 gap-5">
            <TextInput name="firstName" type="text" placeHolder="First Name" />
            <TextInput name="lastName" type="text" placeHolder="Last Name" />
          </div>
          <div>
            <TextInput name="email" type="email" placeHolder="E-mail" />
          </div>

          <h1 className="font-bold">Choose Payment Method</h1>
          <div className=" inline-flex gap-3 items-center">
            <input type='button' className="rounded-full bg-blue-700 w-3 h-3 ring-2 ring-offset-2" />
            <p>PayPal</p>
          </div>

          <div className="inline-flex justify-between items-center w-full border-t-2 pt-5">
            <button type='button' className="w-fit px-5 bg-blue-700 text-white text-sm h-[40px] rounded-lg font-bold">
              DONATE NOW
            </button>
            <p className="text-[30px] text-red-600 font-bold">{`${"$ " + amount}`}</p>
          </div>
        </section>
      </form>
    </FormProvider>
  );
}



interface ImageSliderProps {
  images: { url: string }[];
}
function ImageSlider(props: ImageSliderProps) {
  const { images } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNextSlide = () => {
    setCurrentSlide((prevSlide: number) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const onPreviousSlide = () => {
    setCurrentSlide((prevSlide: number) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const mainImageRepeater = images.map(
    (image: { url: string }, index: number) => (
      <div
        key={"mainSlider" + index}
        className={`${index == currentSlide ? "opacity-100" : "opacity-0 "
          } absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
      >
        <Image
          alt="" width={1000} height={1000}
          src={image.url}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    )
  );

  const imageRepeater = images.map((image: { url: string }, index: number) => (
    <button
      type="button"
      key={"imageRepeater" + index}
      onClick={() => {
        setCurrentSlide(index);
      }}
      className={`${index == currentSlide ? "ring-4 ring-blue-700" : " ring-0"
        }h-[50px] w-[100px] snap-center rounded-sm flex `}
    >
      <Image alt="" width={100} height={100} src={image.url} className="object-cover rounded-sm w-full h-full" />
    </button>
  ));

  return (
    <section className="flex w-full h-full relative group ">
      {mainImageRepeater}

      <section className="flex w-full justify-between absolute h-full items-center">
        <button
          type="button"
          onClick={() => {
            onPreviousSlide();
          }}
          className=""
        >
          <ChevronLeftIcon className="w-12 h-12 text-white" />
        </button>
        <button
          type="button"
          onClick={() => {
            onNextSlide();
          }}
          className=""
        >
          <ChevronRightIcon className="w-12 h-12 text-white" />
        </button>
      </section>

      <section className="px-5 hidden group-hover:flex w-full flex-row   absolute  bottom-2  overflow-y-hidden scrollbar-hide  snap-x overflow-x-scroll scroll scroll-smooth  ">
        <div className="flex flex-row gap-2 py-2">{imageRepeater}</div>
      </section>
    </section>
  );
}

export const getServerSideProps = (async (context: any) => {
  const { query } = context;

  // Fetch data from external API
  // const userDataUrl = 'http://localhost:3000/api/mysql/analytics/generalAnalytics';
  // const { data } = await axios.get(userDataUrl)
  const otherPrograms = DataSet.Programs.filter(
    (program: ProgramProps) => changeToUrl(program.title) != query.program
  );
  const currentProgram = DataSet.Programs.find(
    (program) => program != null && changeToUrl(program.title) === query.program
  );
  // Pass data to the page via props
  return { props: { otherPrograms, currentProgram } }
})


