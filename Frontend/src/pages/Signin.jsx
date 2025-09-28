import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Signin = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/auth/signin", form);
      toast.success("SignUp successfully...");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error signing up");
    }
  };

  const handleUsers = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-7 bg-gradient-to-br   from-gray-800 via-gray-900 to-black ">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <label htmlFor="userName" className="font-medium">
          UserName
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={form.userName}
          placeholder="userName..."
          onChange={handleUsers}
          className="border-1 border-blue-300 rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300 mt-2 mb-5"
        />
        <label htmlFor="emil" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          placeholder="Email..."
          onChange={handleUsers}
          className="border-1 border-blue-300 rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300 mt-2 mb-5"
        />

        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          placeholder="Password..."
          onChange={handleUsers}
          className="border-1 border-blue-300 rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300 mt-2 mb-7"
        />

        <button className="bg-blue-400 py-2 px-5 font-semibold text-xl rounded-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
