import React from "react";

import { createPortal } from "react-dom";

import "./Modal.css";

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="overlay fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] z-[1000] "></div>
      <div className=" modal-children fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-[10px] desktop:p-[50px] z-[1000] text-black rounded ">
        <button
          title="Close"
          className="font-bold hover:text-red-600 duration-150 ease-linear text-xl text-right w-full"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
