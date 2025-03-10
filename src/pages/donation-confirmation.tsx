import React from "react";

function DonationConfirmation() {
  return (
    <section className=" py-10 w-full flex  min-h-screen  flex-col gap-5 items-center">
      <div className="flex w-full   justify-center h-[300px] items-center relative ">
        <img
          src="/src/assets/campaing-4.jpg"
          className="h-[300px] w-full flex bg-yellow-200 object-cover grayscale "
        />
        <div className="flex w-full absolute h-full bg-gray-900/80 items-center justify-center ">
          <p className="font-bold text-[40px] text-center text-white ">
            Donation-Confirmation
          </p>
        </div>
      </div>

    
        {/*leftSection*/}
        <section className="flex  flex-col  justify-center items-center ">
          <h1 className="font-bold text-[20px]">THANKS FOR YOUR DONATION:</h1>

          <div className="flex flex-col w-full  rounded-lg mt-5  ">
            <div className=" grid grid-cols-2 w-full  py-3">
              <p>First Name</p>
              <p className="text-right">Jane</p>
            </div>
            <div className=" grid grid-cols-2 w-full  py-3">
              <p>Last Name</p>
              <p className="text-right">Jane</p>
            </div>

            <div className=" grid grid-cols-2 w-full py-3">
              <p>E-mail</p>
              <p className="text-right">Jane@gmail.com</p>
            </div>
            <div className=" grid grid-cols-2 w-full py-3">
              <p>Payment Method</p>
              <p className="text-right">Pay-Pal</p>
            </div>
          </div>

          <div className="flex flex-row w-full  border-t border-b gap-5 items-center py-5 mt-5">
            <img
              src="/src/assets/campaing-4.jpg"
              className="h-[90px] w-[150px] flex bg-yellow-200 object-fill"
            />
            <div className="flex w-full h-full flex-col justify-center">
              <h1 className="uppercase font-semibold ">Child Sponsorship</h1>
              <p className="text-sm">ID:</p>
            </div>

            <div className="flex ">
              <p>{`${"$" + 1000000}`}</p>
            </div>

            <div className="flex  ">
              <p className="bg-green-500 text-white flex px-5 text-sm py-1 w-fit h-fit ">
                Status
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-5 w-full px-5 bg-blue-700 text-white text-sm h-[40px] rounded-lg font-bold"
          >
            GO BACK
          </button>
        </section>
        {/*RightSection*/}
     
    </section>
  );
}

export default DonationConfirmation;
