import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/chocolate">
        | Chocolate |
      </NavLink>
      <NavLink exact to="/chips">
        | Chips |
      </NavLink>
      <NavLink exact to="/cookies">
        | Cookies |
      </NavLink>
    </nav>
  );
}

export default NavBar;