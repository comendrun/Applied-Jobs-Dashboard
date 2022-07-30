import React, { useState } from "react";
import threeDots from "../images/icon-ellipsis.svg";
import DeleteButton from "./DeleteButton";
import Modal from "./Modal";

export default function ThreeDotMenu({ selectedItemId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img
        alt=""
        src={threeDots}
        className="more select-none cursor-pointer opacity-100 hover:opacity-70 duration-150 ease-in"
        onClick={() => setIsMenuOpen((e) => !e)}
      />

      {isMenuOpen && (
        <div>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="overlay fixed top-0 bottom-0 left-0 right-0 bg-transparent z-[99] "
          ></div>

          <ul className="text-black m-auto text-center relative top-14 right-10 w-[10rem] min-h-[5rem] bg-white p-5 rounded-xl z-[100] text-sm">
            <li className="text-base font-bold hover:opacity-75 cursor-pointer">
              Edit title
            </li>
            <li className=" font-bold hover:opacity-75 cursor-pointer text-red-500 ">
              <button
                className="py-1 rounded-2xl   duration-100 ease-in"
                onClick={() => setShowModal(true)}
              >
                Delete this entry
              </button>
            </li>
          </ul>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <div className="text-center flex flex-col gap-2 ">
              <p className="text-xl font-bold  p-4">
                {" "}
                Are you sure you want to delete this entry?
              </p>
              <DeleteButton
                isInMenu={true}
                id={selectedItemId}
                btnClass="border border-red-400 px-4 py-1 rounded-2xl"
              />
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
