import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  const totalProducts = products.length;

  const lowStock = products.filter((p) => p.amount > 0 && p.amount <= 5).length;

  const outOfStock = products.filter((p) => p.amount === 0).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <h1 className="text-white text-2xl font-bold">Welcome Back, Admin</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold">{totalOrders}</h2>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">Rs {totalRevenue.toFixed(0)}</h2>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Products</p>
          <h2 className="text-2xl font-bold">{totalProducts}</h2>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-2xl font-bold text-yellow-600">{lowStock}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="users"
          className="group bg-blue-600 text-white p-5 rounded-lg flex justify-between items-center"
        >
          Users
          <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Link>

        <Link
          to="products"
          className="group bg-purple-600 text-white p-5 rounded-lg flex justify-between items-center"
        >
          Products
          <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Link>

        <Link
          to="orders"
          className="group bg-green-600 text-white p-5 rounded-lg flex justify-between items-center"
        >
          Orders
          <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Link>

        <Link
          to="inventory"
          className="group bg-gray-700 text-white p-5 rounded-lg flex justify-between items-center"
        >
          Inventory
          <FaArrowRightLong className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Quick Insights</h2>

        <p>Total Revenue: Rs {totalRevenue.toFixed(0)}</p>
        <p>Out of Stock Products: {outOfStock}</p>
      </div>
    </div>
  );
};

export default Dashboard;
