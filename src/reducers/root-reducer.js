// import {
//   FETCH_BOOKS_REQUEST,
//   FETCH_BOOKS_SUCCSES,
//   FETCH_BOOKS_ERROR,
//   INCREASE_ITEMS_IN_CART,
//   DECREASE_ITEMS_IN_CART,
//   DELETE_ITEMS_FROM_CART
// } from "../actions";
import cart from "./cart-reducer";
import shop from "./book-list-reducer";

const initialState = {
  shop: {
    books: [],
    isLoading: true,
    requestError: null
  },
  cart: {
    itemsInCart: [],
    orderTotal: 0
  }
};

//combine two reducers
const rootReducer = (state = initialState, action) => {
  return {
    shop: shop(state.shop, action),
    cart: cart(state, action)
  };
};

//const rootReducer1 = combineReducers({ shop, cart });

export default rootReducer;
