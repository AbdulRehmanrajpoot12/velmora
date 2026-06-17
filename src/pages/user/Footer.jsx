import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-gray-400 p-6 flex flex-col items-start justify-center">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={assets.logo} alt="Logo" className="h-10" />
              <Link to="/Home" className="text-xl font-semibold cursor-pointer">
                Velmora.
              </Link>
            </div>
            <p className="text-sm text-gray-700 hidden lg:block w-1/3 ml-4 mt-2">
              Velmora brings modern shopping to your fingertips with quality
              products, smooth browsing, and a seamless experience designed for
              everyday convenience. We focus on style, trust, and value—making
              every purchase simple, fast, and enjoyable.
            </p>
            <p className="text-sm text-gray-700 lg:hidden w-full ml-4 mt-1">
              Velmora brings modern shopping to your fingertips with quality
              products, smooth browsing, and a seamless experience designed for
              everyday convenience.
            </p>
            <div className="ml-4 mt-4 flex gap-4">
              <FaXTwitter className="w-5 h-5  cursor-pointer" />
              <FaLinkedin className="w-5 h-5 cursor-pointer" />
              <FaFacebook className="w-5 h-5 cursor-pointer" />
              <FaInstagram className="w-5 h-5 cursor-pointer" />
            </div>

            <div className="bg-gray-500 h-0.5 w-full mt-3 ml-4 lg:hidden" />
          </div>
          <div className="flex flex-col w-1/2 lg:w-1/4 ml-4 mt-3 gap-2">
            <h1 className="text-xl font-medium">Contact Us</h1>

            <div className="flex flex-col gap-2">
              <p className="flex text-[15px] items-center gap-1 text-gray-700 underline">
                <FaLocationDot /> Karachi, Pakistan
              </p>
              <p className="flex text-[15px] items-center gap-1 text-gray-700 underline">
                <FaPhoneAlt /> +92 300 1234567
              </p>
              <p className="flex text-[15px] items-center gap-1 text-gray-700 underline">
                <MdEmail /> support@velmora.com
              </p>
              <p className="flex text-[15px] items-center gap-1 text-gray-700 underline">
                <FaClock /> Mon - Sat: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-white items-center justify-center">
        <p className="text-sm">© 2026 Velmora. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
