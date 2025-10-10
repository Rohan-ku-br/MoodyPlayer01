import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserSection from "./UserSection";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };

  const [showUserSection, setShowUserSection] = useState(false);

  const handleUserClick = () => {
    setShowUserSection(!showUserSection);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-5 py-2 pr-36 bg-white/30 backdrop-blur-md border-b border-white/30 z-50">
      <div className="flex items-center -gap-1  jelly-hover">
        <i className="ri-align-item-vertical-center-fill text-2xl"></i>
        <NavLink to="/">
          <h1 className="text-2xl font-bold fontLogo drop-shadow-lg grad-color ">
            Moody Player
          </h1>
        </NavLink>
      </div>
      <form onSubmit={handleSearch} className="relative w-[200px] max-w-sm">
        <input
          type="text"
          placeholder="Search Songs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full px-3 py-1 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-300 bg-gray-100"
        />
        <button type="submit">
          <i className="ri-search-2-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </button>
      </form>

      <div className="flex gap-7 text-ls text-white font-semibold ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/live">Live</NavLink>
        <NavLink to="/Favorites">Favorites</NavLink>
        {!token ? (
          <div className="flex items-center text-center gap-1 ">
            <NavLink to="/login">
              <button className="bg-blue-400 px-2 py-0.5 font-extralight rounded">
                Log in
              </button>
            </NavLink>
            <NavLink to="/signin">
              <button className="bg-blue-400 px-2 py-0.5 font-extralight rounded">
                Sign up
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="relative">
            <button onClick={handleUserClick}>😁</button>
            {showUserSection && (
              <UserSection onClose={() => setShowUserSection(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
