import produce from 'immer';
import { ActionType } from './actions';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  formattedPrice: string;
  defaultPriceId: string;
}

interface ActionReducerType {
  type: ActionType;
  payload?: any;
}

interface StateReducerType {
  cart: Product[];
}

export function CartReducer(
  state: StateReducerType,
  action: ActionReducerType,
) {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return produce(state, (draft) => {
        draft.cart.push(action.payload.product);
      });
    }

    case ActionType.REMOVE_TO_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (product) => product.id !== action.payload.id,
        );
      });
    }

    default:
      return state;
  }
}
