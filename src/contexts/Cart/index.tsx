import {
  addProductToCartReducer,
  removeProductToCartReducer,
} from '@/reducers/Cart/actions';
import { CartReducer } from '@/reducers/Cart/reducer';
import { createContext, ReactNode, useReducer } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  formattedPrice: string;
  defaultPriceId: string;
}

interface CartContextType {
  cart: Product[];
  totalPayable: number;
  addProductToCart: (product: Product) => void;
  removeProductToCart: (id: Product) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(CartReducer, { cart: [] });

  const { cart } = state;

  function addProductToCart(product: Product) {
    dispatch(addProductToCartReducer(product));
  }

  function removeProductToCart(id: Product) {
    dispatch(removeProductToCartReducer(id));
  }

  const totalPayable = cart.reduce((total, product) => {
    return (total += product?.price);
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, totalPayable, addProductToCart, removeProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
