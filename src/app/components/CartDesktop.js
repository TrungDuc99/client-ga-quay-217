"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDesktop = () => {
  const { isOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      CartDesktop
    </div>
  );
};

export default CartDesktop;
