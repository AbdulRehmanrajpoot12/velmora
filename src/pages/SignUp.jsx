import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
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

    const alreadyExists = users.find(
      (user) =>
        user.email === formData.email &&
        user.username === formData.username &&
        user.password === formData.password,
    );

    if (alreadyExists) {
      alert("User with this email, username, and password already exists!");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "user",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful");
  };

  return (
    <div className=" min-h-screen bg-gray-400 flex items-center justify-center p-10 md:p-16">
      <div className="flex items-center justify-center rounded ">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 flex rounded-xl items-center justify-center"
        >
          <div className="p-10 flex flex-col gap-12">
            <div className="relative items-center">
              <p className="text-4xl font-semibold">Sign Up</p>
              <div className="bg-black absolute w-8 h-1" />

              <p className="w-3/4 text-gray-700 mt-4">
                <span className="text-black">Join us today!</span> Create your
                account to start shopping.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                name="username"
                className="bg-gray-200 rounded p-2 outline-none"
                required
              />
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
                className="bg-gray-200 rounded p-2 outline-none"
                required
              />
              <p className="text-sm text-gray-800">
                Already have an account?{" "}
                <Link to={"/"} className="text-black underline">
                  Login
                </Link>
              </p>
              <button
                type="submit"
                className="bg-gray-400 rounded p-2 hover:bg-gray-500 duration-300 cursor-pointer"
              >
                Create account
              </button>
            </div>
          </div>

          <div className=" hidden md:block">
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

export default SignUp;
