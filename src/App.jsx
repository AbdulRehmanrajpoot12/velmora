import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/user/Navbar";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/user/ProductPage";
import SingleProductPage from "./pages/user/SingleProductPage";
import Footer from "./pages/user/Footer";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import Dashboard from "./pages/admin/Dashboard";
import Admin from "./pages/admin/Admin";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Order";
import Inventory from "./pages/admin/Inventory";
import Users from "./pages/admin/Users";

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/Signup" ||
    location.pathname.startsWith("/admin");

  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/Signup" ||
    location.pathname.startsWith("/admin");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.find((user) => user.role === "admin");

    if (!adminExists) {
      users.push({
        id: 1,
        username: "admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
      });

      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
