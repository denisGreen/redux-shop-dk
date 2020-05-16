import React from "react";
import { Switch, Route } from "react-router-dom";

import { withBookstoreService } from "../hoc";
import Header from "../header";
import { Home, Cart } from "../pages";
//import { useFetchCustomHookForJsonPlaceholder } from "../../services/fake-api-service";
//	100 posts
//comments 	500 comments
//albums 	100 albums
//photos 	5000 photos
//todos 	200 todos
//users 	10 users

const App = () => {
  //console.log(useFetchCustomHookForJsonPlaceholder("users"));

  return (
    <main role="main" className="container">
      <Header qtyOfItems={5} total={55} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
        <Route render={() => <div>Page Not Found</div>} />
      </Switch>
    </main>
  );
};
export default withBookstoreService()(App);
