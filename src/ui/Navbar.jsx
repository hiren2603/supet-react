import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState({
    campus: false,
    programs: false,
  });
  return (
    <div className="bg-gray-50 flex justify-around items-center h-16">
      <div>
        <h1 className="text-4xl font-bold">Our Logo</h1>
      </div>
      <ul className="flex gap-20 font-[18px] relative">
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li
          // className="h-100"
          onMouseEnter={() => setIsOpen({ campus: true, programs: false })}
        >
          <NavLink>Campus</NavLink>
        </li>
        {/* campus submenu */}
        {isOpen.campus && (
          <ul
            className="absolute flex flex-col w-full bg-[#0a5089] text-white top-10 px-4 z-10"
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(false)}
          >
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="campus/school">School</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="campus/sports-gym">Sports & Gym</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="campus/hostels">Hostels</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="campus/mesh">Bhojanalaya</NavLink>
            </li>
          </ul>
        )}
        <li
          className="h-[100%]"
          onMouseEnter={() => setIsOpen({ campus: false, programs: true })}
        >
          <NavLink>Programs</NavLink>
        </li>
        {/* Programms SubMenu */}
        {isOpen.programs && (
          <ul
            className="absolute flex flex-col w-full bg-[#0a5089] text-white top-10 px-4 z-10"
            onMouseEnter={() => setIsOpen({ campus: false, programs: true })}
            onMouseLeave={() => setIsOpen({ campus: false, programs: false })}
            onClick={() => setIsOpen({ campus: false, programs: false })}
          >
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="programs/houses">House System</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="programs/clubs">Clubs</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="programs/recognition">Recognition & Awards</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="programs/health">Health</NavLink>
            </li>
            <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
              <NavLink to="programs/initiatives">Initiatives</NavLink>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
