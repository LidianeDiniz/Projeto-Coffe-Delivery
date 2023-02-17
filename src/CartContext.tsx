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
  modifyCartItem: ( cartItemId: number, type: 'increment' | 'decrement') => void;
  removeCartItem: (cartItemId: number) => void;
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

  function modifyCartItem(
    cartItemId: number,
    type: "increment" | "decrement"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increment" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }


  function removeCartItem(cartItemId: number){
    const newCart = produce(cartItems, (draft) =>{
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId);

        if(coffeeExistsInCart >= 0){
          draft.splice(coffeeExistsInCart, 1);
        }
      
    });

    setCartItems(newCart)

  }
  
   
  

  return (
    <CartContext.Provider value={{ cartItems, CartQuantity, AddToCart, modifyCartItem, removeCartItem}}>
      {children}
    </CartContext.Provider>
  );
}
