import React, { useEffect, useState } from "react";
import { dummyProductData as initialProduct } from "../../assets/assets";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      setProducts(initialProduct);
      localStorage.setItem("products", JSON.stringify(initialProduct));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const addProducts = (newProducts) => {
    const product = {
      ...newProducts,
      id: Date.now(),
    };

    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleUpdate = (id, updatedData) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updatedData } : p,
    );

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Products</h1>

        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add Product
        </button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                className="w-16 h-16 object-cover rounded-md"
              />

              <div>
                <h2 className="font-semibold text-lg">{product.title}</h2>

                <p className="text-sm text-gray-500">{product.category}</p>

                <div className="flex gap-3 text-sm mt-1">
                  <p>Price: {product.price}</p>
                  <p>Stock: {product.amount}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  handleUpdate(product.id, { amount: product.amount + 1 })
                }
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                +
              </button>

              <button
                onClick={() =>
                  handleUpdate(product.id, { amount: product.amount - 1 })
                }
                className="bg-yellow-500 text-white px-3 py-1 rounded-md"
              >
                -
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
