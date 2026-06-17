import React from "react";
import { useParams } from "react-router-dom";
import { dummyProductData } from "../../assets/assets";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaTruckFast, FaLock } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { CiChat1 } from "react-icons/ci";
import { useCart } from "../../Context/CartContext";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = dummyProductData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
        <p className="text-2xl font-semibold">Product not found!!</p>
        <p className="w-1/2 text-center text-gray-600">
          The item you’re looking for may be unavailable, removed, or the link
          may be incorrect. Please return to the shop and explore our latest
          products.
        </p>
        <Link
          to="/Home"
          className="bg-gray-400 hover:bg-gray-600 transition-all duration-300 p-2 rounded"
        >
          Return to Home Page
        </Link>
      </div>
    );
  }

  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="grid md:grid-cols-2 p-12 md:px-24 md:py-12 gap-4">
      <img
        src={product.image}
        alt={product.title}
        className="cursor-pointer rounded"
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-600 line-clamp-2 md:line-clamp-none">
          {product.description}
        </p>

        <div className="flex gap-1 items-center">
          <p className="text-green-600">
            $
            {(product.price - (product.price * product.discount) / 100).toFixed(
              2,
            )}
          </p>
          <p className="text-gray-600 bg-gray-200 px-0.5 text-sm line-through">
            {product.discount}%
          </p>
        </div>

        <div className="bg-gray-400 w-full h-0.5 mt-4" />

        <div className="flex mt-6 mb-6">
          <button
            onClick={handleAddToCart}
            className="bg-gray-400 hover:bg-gray-600 duration-300 transition-all cursor-pointer p-1 rounded w-1/2"
          >
            Add to Cart
          </button>
        </div>

        <div className="bg-gray-400 w-full h-0.5 mt-4" />

        <h2 className="text-lg font-semibold mt-2">Why Buy From Velmora?</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 text-sm mt-2">
          <div className="bg-gray-100 rounded p-2 flex flex-col items-center text-center gap-2">
            <TiTick className="text-xl" />
            <p>30 Days Warranty</p>
          </div>

          <div className="bg-gray-100 rounded p-2 flex flex-col items-center text-center gap-2">
            <FaTruckFast className="text-xl" />
            <p>Fast Delivery</p>
          </div>

          <div className="bg-gray-100 rounded p-2 flex flex-col items-center text-center gap-2">
            <FaLock className="text-xl" />
            <p>Secure Checkout</p>
          </div>

          <div className="bg-gray-100 rounded p-2 flex flex-col items-center text-center gap-2">
            <GiReturnArrow className="text-xl" />
            <p>Easy Returns</p>
          </div>

          <div className="bg-gray-100 rounded p-2 flex flex-col items-center text-center gap-2">
            <CiChat1 className="text-xl" />
            <p>Chat Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
