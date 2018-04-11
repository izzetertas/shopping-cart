import { applyMiddleware, createStore, combineReducers } from 'redux';
import checkoutReducer from './Checkout/reducer';
import logger from 'redux-logger'

const initialState = {
  checkOut : {
    products : [
      {price: '49.99', image: 'img/football.png', name: 'Football', id : 1, quantity : 1},
      {price: '9.99', image: 'img/baseball.jpg', name: 'Baseball', id: 2, quantity : 2},
      {price: '29.99', image: 'img/basketball.jpg', name: 'Basketball', id: 3, quantity : 3}
    ]
  }  
}

const store = createStore(
  combineReducers({
    checkOut: checkoutReducer
  }),
  initialState,
  applyMiddleware(logger)
);

export default store;