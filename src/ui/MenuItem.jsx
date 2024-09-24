import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, path, onClick }) => {
  return (
    <NavLink
      to={path}
      className="block px-4 py-2 border-b-[1px] border-white hover:border-b-[1px] hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
