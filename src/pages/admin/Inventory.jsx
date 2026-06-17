import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const getStatus = (amount) => {
    if (amount > 10) return "In Stock";
    if (amount > 0) return "Low Stock";
    return "Out of Stock";
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6">Inventory</h1>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                className="w-14 h-14 rounded object-cover"
              />

              <div>
                <h2 className="font-semibold">{product.title}</h2>

                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>

            <div className="text-right">
              <p>Stock: {product.amount}</p>

              <span
                className={`text-sm px-2 py-1 rounded ${
                  product.amount > 10
                    ? "bg-green-100 text-green-700"
                    : product.amount > 0
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {getStatus(product.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
