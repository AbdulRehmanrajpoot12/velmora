import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const { state } = useCart();
  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  return (
    <div className="bg-gray-400 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" className="w-10 h-10" />
        <Link to="/Home" className="text-xl font-semibold cursor-pointer">
          Velmora.
        </Link>
      </div>
      <div className="flex items-center gap-4 mr-9  ">
        <Link
          to="/products"
          className="text-sm md:text-[16px] text-gray-700 hover:text-gray-800"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="text-sm md:text-[16px] text-gray-700 hover:text-gray-800"
        >
          <div className="relative">
            {totalItems > 0 && (
              <span className="text-[11px] absolute bottom-2 left-2 bg-gray-200 rounded-full px-1">
                {totalItems}
              </span>
            )}
            <FaShoppingCart />
          </div>
        </Link>

        <button
          onClick={() => logout()}
          className="bg-red-600 p-1 text-sm rounded text-white cursor-pointer hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
