import React, { useState } from "react";
import ProductCard from "./../../components/user/ProductCard";
import HeroSection from "./../../components/user/HeroSection";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeroSection setQuery={setQuery} />
      <ProductCard query={query} />
    </div>
  );
};

export default Home;
