import React from "react";
import { NavLink } from "react-router-dom";

function Cookies() {
  return (
    <div>
      <h1>Cookies</h1>
      <img
        src="https://1.bp.blogspot.com/-kh-i8cFq7nI/VL6ToMDgGGI/AAAAAAAAZy0/w-CN2TnPOog/s280/Oatmeal%2BRaisin%2BCookie%2B9696.jpg"
        alt="Colt's favorite!"
      />
      <br />
      <NavLink exact to="/">
        Back
      </NavLink>
    </div>
  );
}

export default Cookies;