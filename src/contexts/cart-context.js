import { createContext, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers";

const CartContext = createContext(cartInitialState);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [{ cart, wishlist }, cartDispatch] = useReducer(
    cartReducer,
    cartInitialState
  );

  return (
    <CartContext.Provider value={{ cart, wishlist, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
