import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case 'REMOVE_ITEM':
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: updatedCart };

    case 'UPDATE_QUANTITY':
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cart: updatedCartQuantity };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};