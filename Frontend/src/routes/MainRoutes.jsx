import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Live from "../components/Live";
import Navbar from "../nav/Navbar";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Favorites from "../pages/Favorites";

const MainRoutes = () => {
  return (
    <div>
      <Navbar  />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
