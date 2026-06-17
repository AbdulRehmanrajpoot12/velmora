import React from "react";
import { useCart } from "../../Context/CartContext";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const currentPrice = item.price - (item.price * (item.discount || 0)) / 100;

  return (
    <div className="rounded-3xl border border-gray-300 xl:w-11/12 mb-6">
      <div className="flex flex-col gap-6 border-b border-gray-300 px-4 py-6 sm:flex-row sm:items-center">
        <img
          src={item.image}
          alt={item.title}
          className="mx-auto w-36 rounded bg-gray-300 p-4 sm:mx-0 sm:w-32"
        />

        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold xl:text-2xl">{item.title}</h1>

            <FaTrashAlt
              className="cursor-pointer text-2xl text-red-600 hover:text-red-700"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-2xl font-semibold text-green-600 xl:text-3xl">
                ${currentPrice.toFixed(2)}
              </p>
              {item.discount > 0 && (
                <p className="text-sm text-gray-500 line-through">
                  ${item.price}
                </p>
              )}
            </div>

            <div className="flex h-11 items-center gap-4 rounded bg-gray-50 px-5 py-1">
              <FaMinus
                className="cursor-pointer text-xl hover:text-gray-700"
                onClick={() =>
                  dispatch({ type: "DECREMENT", payload: item.id })
                }
              />
              <span className="font-semibold text-lg w-6 text-center">
                {item.quantity}
              </span>
              <FaPlus
                className="cursor-pointer text-xl hover:text-gray-700"
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
