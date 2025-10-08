import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const UserSection = ({ onClose }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.info("Logged Out");
    navigate("/login");
    onClose();
  };
  return (
    <div className="z-60 absolute -right-28 top-10 bg-gray-700 p-3  flex flex-col gap-2 text-white rounded">
      <div className="flex justify-between gap-7">Account <span>✔️</span></div>
      <div className="flex justify-between gap-7">Profile <span>✔️</span></div>
      <div className="flex justify-between gap-7">settings <span>✔️</span></div>
      <NavLink className="border-t-1 border-gray-400 " onClick={handleLogOut}>
        <button className="px-2 py-0.5  ">
          Log out
        </button>
      </NavLink>
    </div>
  );
};

export default UserSection;
