import React from "react";
import { NavLink } from "react-router-dom";

const NevItem = ({ children }) => {
  return (
    <li>
      <NavLink to="/about">About Us</NavLink>
    </li>
  );
};

export default NevItem;
