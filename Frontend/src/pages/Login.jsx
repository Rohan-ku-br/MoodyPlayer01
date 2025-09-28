import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleloginUser = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ fixed
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        login
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login Successfully 🎶");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid Login ❌");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-7 bg-gradient-to-br from-purple-400 via-purple-900 to-blue-500">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email" // ✅ added
          value={login.email} // ✅ fixed
          placeholder="email..."
          onChange={handleloginUser}
          className="border-1 border-blue-300 rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300 mt-2 mb-5"
        />

        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password" // ✅ added
          value={login.password} // ✅ fixed
          placeholder="Password..."
          onChange={handleloginUser}
          className="border-1 border-blue-300 rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300 mt-2 mb-7"
        />

        <button
          type="submit" // ✅ lowercase
          className="bg-blue-400 py-2 px-5 font-semibold text-xl rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
