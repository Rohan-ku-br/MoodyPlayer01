import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Live from "../components/Live";
import StartingPage from "../components/StartingPage";
import Navbar from "../nav/Navbar";
import Signin from "../pages/Signin";
import Login from "../pages/Login";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
