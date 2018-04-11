import { ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY } from './constants';

const initialState = { 
  products : []
};

export default function reducer(state = initialState, action ) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        products: state.products.concat(action.payload)
      };
    case REMOVE_ITEM:
      let products = state.products.filter(item => item.id !== action.id); 
      return {
        products
      };
    case CHANGE_QUANTITY: 
      products = state.products.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity : action.payload.quantity}
        } else {
          return {...item};
        }
      });
      return { 
        products 
      };
    default:
      return state;
  }
} 