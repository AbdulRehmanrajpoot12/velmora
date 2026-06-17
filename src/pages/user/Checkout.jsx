import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subTotal = cartItems.reduce((sum, item) => {
    const discountedPrice =
      item.price - (item.price * (item.discount || 0)) / 100;
    return sum + discountedPrice * item.quantity;
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    const discountAmount =
      ((item.price * (item.discount || 0)) / 100) * item.quantity;
    return sum + discountAmount;
  }, 0);

  const deliveryFee = 15;
  const total = subTotal + deliveryFee;

  const handlePlaceOrder = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cartItems,
      total: total,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    dispatch({ type: "CLEAR_CART" });

    alert("Order placed successfully!");

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-gray-100 rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-1/2 p-6 sm:p-10 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Checkout</h1>

          <div className="flex gap-3">
            <input
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First name"
              className="w-1/2 border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last name"
              className="w-1/2 border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="Phone number"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            value={formData.address}
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Address"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            value={formData.city}
            onChange={handleChange}
            name="city"
            type="text"
            placeholder="City"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-black"
          />

          <button
            className="w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-800 transition"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 p-6 sm:p-10 border-t lg:border-t-0 lg:border-l">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            {cartItems.map((item) => {
              const discountedPrice =
                item.price - (item.price * (item.discount || 0)) / 100;

              return (
                <div key={item.id} className="flex justify-between">
                  <p>
                    {item.title} × {item.quantity}
                  </p>
                  <p>Rs. {discountedPrice * item.quantity}</p>
                </div>
              );
            })}
          </div>

          <hr className="my-5" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p>Items</p>
              <p>{totalItems}</p>
            </div>

            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs. {subTotal.toFixed(0)}</p>
            </div>

            <div className="flex justify-between">
              <p>Discount</p>
              <p>- Rs. {totalDiscount.toFixed(0)}</p>
            </div>

            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>Rs. {deliveryFee}</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>Rs. {total.toFixed(0)}</p>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Cash on Delivery available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
