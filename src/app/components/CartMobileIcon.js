"use client";
import { BsHandbagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer  fixed right-[10%] bottom-[5%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-4xl" />
      {cart.length > 0 && (
        <span className="absolute text bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartMobileIcon;
