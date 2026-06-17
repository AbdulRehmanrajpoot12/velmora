import React from "react";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
      className="flex gap-2 md:w-1/3 items-center justify-center"
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        className="outline-none bg-gray-300 py-2 px-4 rounded w-full"
      />

      <button
        type="submit"
        className="cursor-pointer bg-gray-400 rounded py-2 px-4"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
