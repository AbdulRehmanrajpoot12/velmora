import React, { useState } from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
import { useAuth } from "../../Context/AuthContext";

const HeroSection = ({ setQuery }) => {
  const { currentUser } = useAuth();
  return (
    <div className="relative w-full">
      <img
        src={assets.banner}
        alt="banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
        <h1 className="text-white font-bold text-4xl">
          Welcome! {currentUser?.username}
        </h1>
        <SearchBar setQuery={setQuery} />
      </div>
    </div>
  );
};

export default HeroSection;
