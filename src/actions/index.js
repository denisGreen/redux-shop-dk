import * as types from "./ActionTypes";

export const booksRequested = () => {
  return {
    type: types.FETCH_BOOKS_REQUEST
  };
};

export const booksLoaded = newBooks => {
  return {
    type: types.FETCH_BOOKS_SUCCSES,
    payload: newBooks
  };
};

export const booksRequestError = error => {
  return {
    type: types.FETCH_BOOKS_ERROR,
    payload: error
  };
};

export const fetchBooks = bookstoreService => dispatch => {
  dispatch(booksRequested());
  //fetching data from server via getBooks method

  return (
    bookstoreService
      .getBooks()
      //dispatching 'BOOKS_LOADED' action to the Redux store
      .then(
        result => {
          dispatch(booksLoaded(result));
        },
        error => {
          dispatch(booksRequestError(error));
        }
      )
  );
};

export const addOneItemToCart = id => {
  return {
    type: types.INCREASE_ITEMS_IN_CART,
    payload: id
  };
};

export const decreaseSelectedItemInCart = id => {
  return {
    type: types.DECREASE_ITEMS_IN_CART,
    payload: id
  };
};

export const deleteAllSelectedItemsFromCart = id => {
  return {
    type: types.DELETE_ITEMS_FROM_CART,
    payload: id
  };
};
