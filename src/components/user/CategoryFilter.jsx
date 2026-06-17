import React, { useState } from "react";
import { dummyProductData } from "../../assets/assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategoryFilter = ({ onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("all");

  const categories = [
    "all",
    ...new Set(dummyProductData.map((product) => product.category)),
  ];

  const handleClick = (category) => {
    setActive(category);
    onSelectCategory(category);
    setOpen(false);
  };

  return (
    <div className="w-64 h-6 flex items-start justify-center">
      <div className="relative flex flex-col p-2">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center bg-gray-400 p-4 gap-6 cursor-pointer hover:bg-gray-600 text-white py-2 px-3 rounded-md"
        >
          <span className="text-md font-semibold">Category: {active}</span>
          <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>

        {open && (
          <div className="absolute top-full left-0 z-50 w-full bg-gray-400 border border-gray-300 p-2 mt-2 rounded-md shadow-md max-h-60 overflow-y-auto">
            {categories.map((cate) => (
              <div
                key={cate}
                onClick={() => handleClick(cate)}
                className={`py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
                  active === cate
                    ? "bg-gray-200 text-gray-700"
                    : "hover:bg-gray-50 text-gray-600"
                }`}
              >
                {cate}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
