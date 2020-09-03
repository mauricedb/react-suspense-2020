import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Users from "./components/Users";

function App() {
  return (
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
