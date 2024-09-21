import React from "react";

function Submenu({ children, open }) {
  return (
    <div
      className={`absolute left-0 top-[130%] w-[400px] bg-primary text-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "h-48" : "max-h-0"
      }`}
      onClick={open}
    >
      <div className="flex flex-col justify-center">{children}</div>
    </div>
  );
}

export default Submenu;
