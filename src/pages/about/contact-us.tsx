import React from "react";
import { TextArea, TextInput } from "@/components/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import backgroundImage from "/public/cover2223.jpg"
import Image from "next/image";

type FormValues = {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
};

export default function ContactUs() {
  const methods = useForm<FormValues>();
  const { handleSubmit, setValue } = methods;
  const onSubmit = () => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className=" flex w-full  flex-col gap-10 pt-14 pb-10">
          <div className="flex w-full   justify-center h-[370px] items-center relative ">
            <Image alt=""
              src={backgroundImage}
              className="h-full w-full flex bg-yellow-200 object-cover grayscale "
            />
            <div className="flex w-full absolute h-full text-white flex-col bg-gray-900/40 items-center justify-center ">
              <p className="font-bold text-[40px] text-center  ">Contact Us</p>
             
            </div>
          </div>

          <section className="grid grid-cols-1  md:grid-cols-2 px-20 gap-10">
            <div className="fle flex-col">
              <p className="font-bold text-[25px]">Get In Touch</p>
              <p>For any questions !</p>
              <section className="flex flex-col gap-5 border-b border-gray-300 py-5">
                {/*address*/}
                <div className="flex flex-row gap-5">
                  <div className="flex w-[50px] h-[50px] rounded-full bg-blue-700 items-center justify-center">
                    <MapPinIcon className="flex w-6 h-6 text-white" />
                  </div>
                  <div className="inline-block">
                    <h1 className="font-bold upp">Address</h1>
                    <p className="text-sm">
                      Kisugu wabigalo, Makindye Division Kampala District
                    </p>
                    <p className="text-sm">P.O.Box 30401, kampala- Uganda</p>
                  </div>
                </div>
                {/*Phone Number*/}
                <div className="flex flex-row gap-5">
                  <div className="flex w-[50px] h-[50px] rounded-full bg-blue-700 items-center justify-center">
                    <PhoneIcon className="flex w-6 h-6 text-white" />
                  </div>
                  <div className="inline-block">
                    <h1 className="font-bold upp">Contacts</h1>
                    <p className="text-sm">
                      +256-781001311 / +256-773802866 / +256-782005288
                    </p>
                  </div>
                </div>
                {/*Email*/}
                <div className="flex flex-row gap-5">
                  <div className="flex w-[50px] h-[50px] rounded-full bg-blue-700 items-center justify-center">
                    <EnvelopeIcon className="flex w-6 h-6 text-white" />
                  </div>
                  <div className="inline-block">
                    <h1 className="font-bold upp">E-mail Address</h1>
                    <p className="text-sm">rapo.uganda@gmail.com</p>
                  </div>
                </div>
              </section>
              <section className="inline-block mt-5 ">
                <h1 className="font-bold">Follow Us:</h1>
                <section className="flex flex-row gap-5">
                  <Link
                    href=""
                    className="flex w-[50px] h-[50px] rounded-full text-white bg-blue-700 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="flex w-[50px] h-[50px] rounded-full text-white bg-blue-700 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="flex w-[50px] h-[50px] rounded-full text-white bg-blue-700 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Link>
                </section>
              </section>
            </div>

            {/*send Message*/}
            <div className="flex flex-col bg-white rounded-lg p-5 gap-5 shadow-md">
              <p className="font-bold text-[25px]   ">Send A Message</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <TextInput
                  name="firstName"
                  type="text"
                  placeHolder="First Name"
                />
                <TextInput
                  name="LastName"
                  type="text"
                  placeHolder="Last Name"
                />
              </div>
              <TextInput name="email" type="text" placeHolder="E-mail" />
              <TextArea
                name="message"
                placeHolder="Message..."
                onInput={(value) => {}}
              />
              <button
                type="button"
                className="uppercase text-sm flex items-center justify-center bg-blue-700 h-[40px] rounded-lg w-full text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </section>
        </section>
      </form>
    </FormProvider>
  );
}
