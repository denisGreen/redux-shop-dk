import * as types from "./ActionTypes";
import * as actions from "./index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import BookstoreService from "../services/bookstore-service";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const bookstoreService = new BookstoreService();

describe("actions tests", () => {
  const newBooks = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      bookDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis blanditiis fugit.",
      price: 32,
      yearWritten: "2020",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      bookDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis blanditiis fugit.",
      price: 45,
      yearWritten: "2019",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    }
  ];

  it("should create FETCH_BOOKS_REQUEST action", () => {
    const expected = {
      type: types.FETCH_BOOKS_REQUEST
    };
    expect(actions.booksRequested()).toEqual(expected);
  });

  it("should create FETCH_BOOKS_SUCCSES action", () => {
    const expected = {
      type: types.FETCH_BOOKS_SUCCSES,
      payload: newBooks
    };
    expect(actions.booksLoaded(newBooks)).toEqual(expected);
  });

  it("should create FETCH_BOOKS_ERROR action", () => {
    const expected = {
      type: types.FETCH_BOOKS_ERROR,
      payload: "error"
    };
    expect(actions.booksRequestError("error")).toEqual(expected);
  });

  it("should create INCREASE_ITEMS_IN_CART action with payload: 1", () => {
    const expected = { type: types.INCREASE_ITEMS_IN_CART, payload: 1 };
    expect(actions.addOneItemToCart(1)).toEqual(expected);
  });
  it("should create asynchronuos action and dispatch FETCH_BOOKS_REQUEST and FETCH_BOOKS_SUCCSES", () => {
    const expectedActions = [
      {
        type: types.FETCH_BOOKS_REQUEST
      },
      {
        type: types.FETCH_BOOKS_SUCCSES,
        payload: newBooks
      }
    ];
    const store = mockStore({});

    //return the Promise
    return store.dispatch(actions.fetchBooks(bookstoreService)).then(() => {
      const testActions = store.getActions();
      expect(testActions).toEqual(expectedActions);
    });
  });
});
