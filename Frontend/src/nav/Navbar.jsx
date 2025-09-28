import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  p-5">
      <div className="flex items-center gap-2 ">
        <i className="ri-align-item-vertical-center-fill text-2xl"></i>
        <h1 className="text-2xl font-bold fontLogo drop-shadow-lg grad-color">
          Moody Player
        </h1>
      </div>
      <div className="relative w-[200px] max-w-sm">
        <input
          type="text"
          placeholder="Search Songs"
          className="w-full rounded-full px-3 py-1 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-300 bg-gray-100"
        />
        <i className="ri-search-2-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
      </div>

      <div className="flex gap-7 text-ls font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/live">Live</NavLink>
        <NavLink to="/feed">Feed</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signin">Signin</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
