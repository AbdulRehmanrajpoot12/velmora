import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import CartItem from "../../components/user/CartItem";
import CartSummary from "../../components/user/CartSummary";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state || { cartItems: [] };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Your Cart is empty!</h1>
        <Link
          to="/products"
          className="bg-gray-400 hover:bg-gray-600 duration-300 transition-all cursor-pointer px-6 py-3 rounded font-medium"
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto my-8 w-full max-w-7xl px-4 xl:my-10">
      <div className="space-y-4 mb-8">
        <div className="flex items-center text-sm xl:text-base">
          <h1
            onClick={() => navigate("/Home")}
            className="cursor-pointer font-semibold text-gray-600 hover:underline"
          >
            Home &gt;
          </h1>
          <h2 className="ml-2 font-semibold text-gray-800">Cart</h2>
        </div>

        <h1 className="text-4xl xl:text-5xl font-bold">YOUR CART</h1>
      </div>

      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="w-full xl:w-7/12 space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="w-full xl:w-5/12">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
