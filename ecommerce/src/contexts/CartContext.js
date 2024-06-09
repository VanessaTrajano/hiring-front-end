import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CartContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useEstado = () => useContext(CartContext);