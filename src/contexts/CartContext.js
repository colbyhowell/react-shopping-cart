import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, addItem] = useState();

  return <CartProvider.Provider>{props.children}</CartProvider.Provider>;
};
