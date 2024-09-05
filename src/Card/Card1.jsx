import React from 'react';
import img from '../Assets/img1.jpg';
import logo from '../Assets/logo1.jpg';

const Card1 = ({ info }) => {
  return (
    <div className="relative lg:w-10/12 w-full m-auto z-10 md:text-base text-sm">
      <img
        src={img}
        className="w-full h-full object-fill z-0"
        alt="Background"
      />
      <div className="w-fit h-full absolute top-0 left-0 bg-[#5c4a13]/60 flex-col gap-10 items-center justify-center">
        <div className="md:w-[150px] w-8 md:h-[150px] m-auto md:my-4 my-2 rounded-full">
          <img
            className="w-full h-full object-fill rounded-full"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="text-center">
          <h1 className="uppercase font-bold md:text-2xl md:my-4">
            || {info.heading} ||
          </h1>
          <p className="md:w-10/12 m-auto font-semibold md:text-xl my-2">
            {info.desc}
          </p>
        </div>
        <div className="w-fit relative md:py-2 px-4 m-auto border-2 border-white border-dashed md:my-10 my-4">
          <span className="absolute md:top-[-29px] top-[-20px] left-1 font-semibold md:text-2xl">
            {info.month}
          </span>
          <p className="font-semibold md:text-2xl">{info.dates}</p>
        </div>
        <div className="grid grid-cols-3 md:text-lg">
          <div>
            <p className="md:text-2xl font-semibold">Address</p>
            <p className="md:text-base text-[10px]">{info.address}</p>
          </div>
          <div>
            <p className="md:text-2xl font-semibold">Regards</p>
            <p className="md:text-base text-[10px]">{info.regards}</p>
          </div>
          <div>
            <p className="md:text-2xl font-semibold">Contact</p>
            <p className="md:text-base text-[8px]">{info.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;