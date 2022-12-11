import { CartContext } from '@/contexts/Cart';
import { useContext } from 'react';

export default function useCart() {
  return useContext(CartContext);
}
