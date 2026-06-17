import React, { useState } from "react";
import { dummyProductData } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import CategoryFilter from "../../components/user/CategoryFilter";

const ProductCard = ({ query = "" }) => {
  const { dispatch } = useCart();
  const handleAddToCart = (selectedProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: selectedProduct,
    });
  };
  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? dummyProductData
      : dummyProductData.filter((product) => product.category === category);

  return (
    <div className="flex p-6 gap-4">
      <CategoryFilter onSelectCategory={setCategory} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  w-full">
        {filteredProducts
          .filter((product) => product.title.toLowerCase().includes(query))
          .map((product) => {
            return (
              <div
                key={product.id}
                className="bg-gray-300 rounded transition-all duration-300 hover:shadow-2xl "
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-tr rounded-tl"
                  />
                </Link>
                <div className="p-2">
                  <p className="text-lg font-semibold line-clamp-1">
                    {product.title}
                  </p>
                  <p className="text-gray-600 text-md line-clamp-1">
                    {product.description}
                  </p>

                  <div className="flex gap-1 items-center">
                    <p className="text-green-600">
                      $
                      {(
                        product.price -
                        (product.price * product.discount) / 100
                      ).toFixed(2)}
                    </p>
                    <p className="text-gray-600 bg-gray-200 px-0.5 text-sm line-through">
                      {product.discount}%
                    </p>
                  </div>
                </div>
                <div className="flex justify-center p-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-400 hover:bg-gray-600 duration-300 transition-all cursor-pointer p-1 rounded w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCard;
