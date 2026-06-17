import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const CartSummary = () => {
  const navigation = useNavigate();
  const { state } = useCart();
  const { cartItems } = state || { cartItems: [] };

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

  return (
    <div className="rounded border border-gray-300 p-6">
      <h1 className="mb-6 text-2xl font-semibold">Order Summary</h1>

      <div className="space-y-3 text-base">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">${subTotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Total Items</p>
          <p className="font-semibold">{totalItems}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Discount</p>
          <p className="font-semibold text-red-600">
            -${totalDiscount.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Delivery Fee</p>
          <p className="font-semibold">${deliveryFee}</p>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      <div className="flex justify-between text-xl font-bold">
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>

      <button
        onClick={() => navigation("/checkout")}
        className="mt-8 w-full h-14 bg-black hover:bg-gray-900 transition-colors text-white font-medium rounded-xl flex items-center justify-center gap-2 cursor-pointer"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
