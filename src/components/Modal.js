import React from "react";

export default function Modal() {
  return (
    <div className=" ">
      <div className="w-full z-40 h-full bg-[#00000080] absolute top-0 right-0 left-0 bottom-0"></div>
      <div className="bg-white w-[20rem] h-[20rem] m-auto z-50 fixed ">
        <p className="text-black">Hello world</p>
      </div>
    </div>
  );
}
