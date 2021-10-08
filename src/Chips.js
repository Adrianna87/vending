import React from "react";
import { NavLink } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>CHiPs</h1>
      <img
        src="https://2.bp.blogspot.com/-PYEHGJV6lTQ/TY-qHOUoIOI/AAAAAAAAH8I/0JcfSFPe_1E/s1600/chips-01.jpg"
        alt="A tasty snack"
      />
      <br />
      <NavLink exact to="/">
        Back
      </NavLink>
    </div>
  );
}

export default Chips;