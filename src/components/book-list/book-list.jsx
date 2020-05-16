import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./book-list.css";

import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import { fetchBooks } from "../../actions";
import { addOneItemToCart } from "../../actions";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BooksList = ({ bookstoreService }) => {
  //subscribing to the store
  const { books, isLoading, requestError } = useSelector(state => state.shop);
  const dispatch = useDispatch();

  // const fetchBooksCallback = useCallback(
  //   () => dispatch(fetchBooks(bookstoreService)),
  //   [dispatch]
  // );

  useEffect(() => {
    //gettting books from the fake server
    dispatch(fetchBooks(bookstoreService))
    //fetchBooksCallback();
  }, []);

  //conditional rendering
  if (isLoading) {
    return <Spinner />;
  } else if (requestError) {
    return <ErrorIndicator />;
  } else {
    return (
      <ul className="goods-list">
        {books.map(book => (
          <li key={book.id}>
            <BookListItem
              {...book}
              onAddToCart={() => dispatch(addOneItemToCart(book.id))}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default withBookstoreService()(BooksList);
