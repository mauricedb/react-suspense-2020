import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Movies from "./components/Movies";
// import Users from "./components/Users";
// import UserDetails from "./components/UserDetails";

const Movies = React.lazy(() => import("./components/Movies"));
const Users = React.lazy(() => import("./components/Users"));
const UserDetails = React.lazy(() => import("./components/UserDetails"));

const App: React.FC = () => (
  <BrowserRouter>
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:userId/movie/:movieId">
          <UserDetails />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
