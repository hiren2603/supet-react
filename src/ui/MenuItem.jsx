import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, path, onClick }) => {
  return (
    <NavLink
      to={path}
      className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-700 transition duration-300"
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
