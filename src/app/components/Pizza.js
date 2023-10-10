"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

import PizzaDetails from "./PizzaDetails";
import { IoCloseOutline } from "react-icons/io5";
Modal.setAppElement("body");
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};
const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  console.log(pizza);
  return (
    <div className="group py-2  x1:py-4 x1:px-2 rounded-x1">
      <Image
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
      />
      <div>
        <div className="text-x1 font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-x1 font-semibold">
          starts at {pizza.price}
        </div>
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Chose
        </button>
        <button className="lg:hidden btn btn-sm gradient text-sm px-3">
          starts at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyle}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className={
            "bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
          }
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4x1 text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
