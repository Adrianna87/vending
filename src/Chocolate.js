import React from "react";
import { NavLink } from "react-router-dom";

function Chocolate() {
  return (
    <div>
      <h1>Chocolate</h1>
      <img
        src="https://www.geekygiftideas.com/wp-content/uploads/Worlds-Largest-Hersheys-Bar.jpg"
        alt="World's largest Hershey bar"
      />
      <br />
      <NavLink exact to="/">
        Back
      </NavLink>
    </div>
  );
}

export default Chocolate;