export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  formattedPrice: string;
  defaultPriceId: string;
}

export function addProductToCartReducer(product: Product) {
  return {
    type: ActionType.ADD_TO_CART,
    payload: { product },
  };
}

export function removeProductToCartReducer({ id }: Product) {
  return {
    type: ActionType.REMOVE_TO_CART,
    payload: { id },
  };
}
