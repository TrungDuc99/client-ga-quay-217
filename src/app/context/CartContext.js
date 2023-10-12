"use client";
import React, { createContext, useState } from "react";
// cart context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    const myData = [
      {
        itemIndex: 1,
        itemFmt: 2,
        itemFmtName: "Call To Order",
        guid: "d66af412-00a0-4c49-b8b5-abaefb79fed0",
        maxCt: 1,
      },
      {
        itemIndex: 2,
        itemFmt: 6,
        itemFmtName: "Title/Discussion/Motion",
        guid: "9f7b9d34-3fcb-42c7-866e-a56f71a8aa4f",
        maxCt: 0,
      },
      {
        itemIndex: 4,
        itemFmt: 6,
        itemFmtName: "Title/Discussion/Motion",
        guid: "406bea5e-1cb0-4d90-96e9-9b80b64ff8ba",
        maxCt: 0,
      },
      {
        itemIndex: 5,
        itemFmt: 6,
        itemFmtName: "Title/Discussion/Motion",
        guid: "ad9aacda-5100-4eef-9ead-c61e1ec0c285",
        maxCt: 0,
      },
      {
        itemIndex: 7,
        itemFmt: 3,
        itemFmtName: "Roll Call",
        guid: "1715f7a3-066d-4787-8233-a36df2a729a9",
        maxCt: 1,
      },
    ];

    additionalTopping.sort((a, b) => a.name.localeCompare(b[name]));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };
    setCart([...cart, newItem]);
  };
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
