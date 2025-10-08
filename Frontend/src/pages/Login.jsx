import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
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
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid Login ❌");
      console.log("error aa gya bhai", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      navigate("/")
    }
  }, [navigate])
  

  return (
    <div className="flex absolute z-90 flex-col  text-white w-full items-center justify-center h-screen  bg-gradient-to-br  from-gray-800 via-gray-900 to-black ">
      <div className="px-[200px] py-[150px] bg-white/20 backdrop-blur-md border-b border-white/30 z-999 flex flex-col items-center justify-center gap-7">
        <h1 className="text-3xl font-bold">Log in</h1>
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
            Log in
          </button>
        </form>
        <div className="flex flex-col items-center gap-1">
          <h2>Don't have an account?</h2>
          <NavLink to="/signin" className="text-lg font-bold text-blue-500">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
