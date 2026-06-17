import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );

    if (!foundUser) {
      alert("Invalid Credentials");
      return;
    }

    login(foundUser);

    if (foundUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/Home");
    }
  };
  return (
    <div className=" min-h-screen bg-gray-400 flex items-center justify-center p-10 md:p-16">
      <div className="flex items-center justify-center rounded ">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 flex rounded-xl items-center justify-center"
        >
          <div className="p-12 flex flex-col gap-12">
            <div className="relative items-center">
              <p className="text-4xl font-semibold">Login</p>
              <div className="bg-black absolute w-10 h-1" />

              <p className="w-3/4 text-gray-700 mt-4">
                <span className="text-black">Welcome back!</span> Log in to
                continue your journey with us.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-gray-200 rounded p-2 outline-none"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-gray-200 rounded p-2 outline-none relative"
                required
              />
              <p className="text-sm text-gray-800">
                Don't have an account?{" "}
                <Link to={"/Signup"} className="text-black underline">
                  Signup
                </Link>
              </p>
              <button
                type="submit"
                className="bg-gray-400 rounded p-2 hover:bg-gray-500 duration-300 cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={assets.landscape}
              alt="Landscape"
              className="w-full h-full bg-cover rounded-tr-xl rounded-br-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
