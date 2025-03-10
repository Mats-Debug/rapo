import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
import { TextInput, TextInput2 } from "./TextInput";
import { useForm, FormProvider } from "react-hook-form";
import { ComboBox } from "./combobox";
import { DataSet } from "../Utils/Data";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function DonationDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="uppercase text-sm hidden gap-2 md:flex items-center bg-blue-800 h-[40px] px-5 rounded-lg w-fit text-white font-bold"
      >
        <CheckCircleIcon className="w-5 h-5 text-white"/>  <p> Donate Now</p>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-0 left-0 md:p-10 py-10 z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm bg-gray-800/40"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
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
            <DialogPanel className="bg-white rounded-lg m-5  h-full w-full sm:h-fit sm:w-fit max-h-screen relative ">
              <button
                onClick={() => setIsOpen(false)}
                className="w-[30px] h-[30px] absolute -right-2 -top-2 ring ring-white bg-blue-800 rounded-full flex items-center justify-center"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>

              <div className="w-full h-full overflow-y-auto pt-2 ">
                <DonationSection />
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
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
  const { handleSubmit, setValue } = methods;

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

  const onSubmit = () => {};

  const programList= DataSet.Programs.map((value)=>value.title)

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
              className={`${
                index == 1
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
              className={`${
                index == 2
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
              className={`${
                index == 3
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
              className={`${
                index == 4
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
              className={`${
                index == 5
                  ? "bg-blue-700 text-white "
                  : "bg-neutral-100  text-black"
              }px-5 h-[40px] rounded-lg `}
            >
              $250
            </button>
          </section>
          <div className="relative flex items-center flex-col gap-5">
            <TextInput2
              name="amount"
              type="number"
              placeHolder="Enter Amount"
              onInput={(value) => {
                if(value !=""){
                  setAmount(parseInt(value));
                }else{
                  setAmount(0);
                }
               
              }}
            />
          </div>
          <ComboBox placeHolder="Select Program"  itemSource={programList} onSelectedItem={()=>{}}/>
          
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
            <input
              type="button"
              className="rounded-full bg-blue-800 w-3 h-3 ring-2 ring-offset-2"
            />
            <p>PayPal</p>
          </div>

          <div className="inline-flex justify-between items-center w-full border-t-2 pt-5">
            <button
              type="button"
              className="w-fit px-5 bg-blue-800 text-white text-sm h-[40px] rounded-lg font-bold"
            >
              DONATE NOW
            </button>
            <p className="text-[30px] text-red-600 font-bold">{`${
              "$ " + amount
            }`}</p>
          </div>
        </section>
      </form>
    </FormProvider>
  );
}

export default DonationDialog;
