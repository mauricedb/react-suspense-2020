import React from "react";
import { Link } from "react-router-dom";
import resource from "./resource";

const NavBar: React.FC = () => (
  <nav className="navbar navbar-light bg-light navbar-expand">
    <Link to="/" className="navbar-brand mb-0 h1">
      Home
    </Link>
    <div className="navbar-nav">
      <resource.NavLink
        to="/movies"
        className="nav-link"
        activeClassName="active"
        cacheKeys="https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies"
      >
        Movies
      </resource.NavLink>
      <resource.NavLink
        to="/users"
        className="nav-link"
        activeClassName="active"
        cacheKeys="https://the-problem-solver-sample-data.azurewebsites.net/accounts?sleep=1000"
      >
        Users
      </resource.NavLink>
    </div>
  </nav>
);

export default NavBar;
