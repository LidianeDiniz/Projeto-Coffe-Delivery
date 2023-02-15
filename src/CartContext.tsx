import { createContext, useState, ReactNode } from "react";
import { Coffee } from "./pages/Home/components/CoffeeCards";
import produce from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  AddToCart: (Coffee: CartItem) => void;
  CartQuantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const CartQuantity = cartItems.length;

  function AddToCart(Coffee: CartItem) {
    const CoffeeAlreadyAdded = cartItems.findIndex(
      (cartItem) => cartItem.id === Coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (CoffeeAlreadyAdded < 0) {
        draft.push(Coffee);
      } else {
        draft[CoffeeAlreadyAdded].quantity += Coffee.quantity;
      }
    });
    setCartItems(newCart);
  }
  return (
    <CartContext.Provider value={{ cartItems, CartQuantity, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
