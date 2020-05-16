import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import store from "./store";
//import { test } from "./jsbook";

//test();<div>JSBook</div>
//console.log(store.getState());
//get fetch services
const bookstoreService = new BookstoreService();
const Main = () => (
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
