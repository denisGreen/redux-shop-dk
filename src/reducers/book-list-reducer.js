import * as types from "../actions/ActionTypes";

//reducer for the book-list
const shop = (state, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        isLoading: true
      };
    case types.FETCH_BOOKS_SUCCSES:
      return {
        books: action.payload,
        isLoading: false
      };
    case types.FETCH_BOOKS_ERROR:
      return {
        books: [],
        isLoading: false,
        requestError: action.payload
      };

    default:
      return state;
  }
};
export default shop;
