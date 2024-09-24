import React from "react";

function Submenu({ children, open, close }) {
  return (
    <div
      className={`absolute left-0 top-[150%] w-[280px] bg-primary text-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "h-max" : "max-h-0"
      }`}
      onClick={close}
    >
      <div className="flex flex-col justify-center">{children}</div>
    </div>
  );
}

export default Submenu;
