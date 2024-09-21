import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";

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
    <nav className="bg-white shadow-lg font-catamaran text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">School Website</h1>
          </div>
          <div className="flex items-center">
            <button
              className="md:hidden text-xl focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
            <MenuItem label="Home" path="/" />
            <MenuItem label="About" path="/about" />
            <div className="relative flex" ref={campusRef}>
              <button
                onMouseEnter={toggleCampus}
                className="hover:text-gray-700 transition duration-300"
              >
                Campus
              </button>
              <Submenu open={openCampus}>
                <MenuItem label="School" path="/campus/school" />
                <MenuItem label="Sports & Gym" path="/campus/sports-gym" />
                <MenuItem label="Hostels" path="/campus/hostels" />
                <MenuItem label="Bhojanalaya" path="/campus/mesh" />
              </Submenu>
            </div>
            <div className="relative flex" ref={programsRef}>
              <button
                onMouseEnter={togglePrograms}
                className="hover:text-gray-700 transition duration-300"
              >
                Programs
              </button>
              <Submenu open={openPrograms}>
                <MenuItem label="House System" path="/programs/house-system" />
                <MenuItem label="Clubs" path="/programs/clubs" />
                <MenuItem
                  label="Recognition & Awards"
                  path="/programs/recognition"
                />
                <MenuItem label="Health" path="/programs/health" />
                <MenuItem label="Initiatives" path="/programs/initiatives" />
              </Submenu>
            </div>
            <MenuItem label="Announcement" path="/announcement" />
            <MenuItem label="Contact" path="/contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
