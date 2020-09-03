import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar: React.FC = () => (
  <nav className="navbar navbar-light bg-light navbar-expand">
    <Link to="/" className="navbar-brand mb-0 h1">
      Home
    </Link>
    <div className="navbar-nav">
      <NavLink to="/movies" className="nav-link" activeClassName="active">
        Movies
      </NavLink>
      <NavLink to="/users" className="nav-link" activeClassName="active">
        Users
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
