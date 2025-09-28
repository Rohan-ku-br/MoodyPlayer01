import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-5 pr-36 bg-white/20 backdrop-blur-md border-b border-white/30 z-50">
      <div className="flex items-center gap-2 ">
        <i className="ri-align-item-vertical-center-fill text-2xl"></i>
        <NavLink to="/">
          <h1 className="text-2xl font-bold fontLogo drop-shadow-lg grad-color">
            Moody Player
          </h1>
        </NavLink>
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
        <div className="flex items-center text-center gap-1">
          <NavLink to="/login">
            <button className="bg-blue-400 px-2 py-0.5 font-extralight rounded">
              Login
            </button>
          </NavLink>
          <NavLink to="/signin">
            <button className="bg-blue-400 px-2 py-0.5 font-extralight rounded">
              Signin
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
