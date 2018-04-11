import { ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY } from './constants';

export function addItem(item){
  return {
    type : ADD_ITEM,
    payload : item
  }
}

export function removeItem(id) {
  return {
    type : REMOVE_ITEM,
    id
  }
}

export function changeQuantity(id, quantity){
  return {
    type : CHANGE_QUANTITY,
    payload : {
      id,
      quantity
    }
  }
}