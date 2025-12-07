
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ mode, setMode, search, setSearch }) => {
  return (
    <header className="w-full flex items-center justify-between px-10 py-4 fixed top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md text-white shadow-lg">

      {/* Logo */}
      <NavLink
        to="/"
        className="text-3xl font-extrabold tracking-wide text-red-600 hover:text-red-700 transition"
      >
        FLIMBASE
      </NavLink>
      {/* Right buttons */}
      <div className="flex items-center gap-4">
        <NavLink to="/JoinNow" className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition font-semibold">
          Join Now
        </NavLink>
      </div>

    </header>
  );
};

export default Navbar;
