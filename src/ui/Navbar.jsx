import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";
import Logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCampus, setOpenCampus] = useState(false);
  const [openPrograms, setOpenPrograms] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCampus = () => {
    setOpenCampus(!openCampus);
    setOpenPrograms(false);
  };
  const togglePrograms = () => {
    setOpenPrograms(!openPrograms);
    setOpenCampus(false);
  };

  const closeSubmenus = () => {
    setOpenCampus(false);
    setOpenPrograms(false);
  };

  const campusRef = useRef(null);
  const programsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (campusRef.current && !campusRef.current.contains(event.target)) {
        setOpenCampus(false);
      }
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setOpenPrograms(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="font-medium pt-2 pb-2 border-b-[1px] border-primary shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/">
              <img className="h-16 w-16" src={Logo} alt="Logo" />
            </NavLink>
          </div>
          {/* <div className="flex items-center text-primary">
            <button
              className="md:hidden text-xl focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div> */}
          <div className={`md:flex gap-4 ${isOpen ? "block" : "hidden"}`}>
            <MenuItem label="Home" path="/" />
            <MenuItem label="About" path="/about" />
            <div className="relative flex" ref={campusRef}>
              <NavLink
                onMouseEnter={toggleCampus}
                className="px-4 py-2 border-b-[1px] border-white hover:border-b-[1px] hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
              >
                Campus
              </NavLink>
              <Submenu open={openCampus} close={closeSubmenus}>
                <MenuItem label="School" path="/campus/school" />
                <MenuItem label="Sports & Gym" path="/campus/sports-gym" />
                <MenuItem label="Hostels" path="/campus/hostels" />
                <MenuItem label="Bhojanalaya" path="/campus/mesh" />
              </Submenu>
            </div>
            <div className="relative flex" ref={programsRef}>
              <NavLink
                onMouseEnter={togglePrograms}
                className="px-4 py-2 border-b-[1px] border-white hover:border-b-[1px] hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
              >
                Programs
              </NavLink>
              <Submenu open={openPrograms}>
                <MenuItem label="House System" path="/programs/house-system" />
                <MenuItem label="Clubs" path="/programs/clubs" />
                <MenuItem
                  label="Recognition & Awards"
                  path="/programs/recognition-awards"
                />
                <MenuItem label="Health" path="/programs/health" />
                <MenuItem label="Initiatives" path="/programs/initiatives" />
              </Submenu>
            </div>
            <MenuItem label="News" path="/news" />
            <MenuItem label="Contact" path="/contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
