import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#475c54] bg-[#cce3de] absolute left-1/2 -translate-x-1/2 w-full z-999">
      <img
        src={Logo}
        alt="Block Refresh Logo"
        className="rounded-full w-20 mr-4"
      />
      <h1 className="w-full text-3xl font-bold">Block Refresh</h1>
      <ul className="hidden md:flex text-center">
        <li className="p-4">Home</li>
        <li className="p-4 whitespace-nowrap">About Us</li>
        <li className="p-4 whitespace-nowrap">Contact Us</li>
        <li className="p-4">Membership</li>
        <li className="p-4">Donate</li>
        <li>
          <button className="p-4 whitespace-nowrap rounded-full text-white bg-[#668378]">
            Log In
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        <div
          className={
            nav
              ? "absolute left-0 top-0 w-[90%] h-full border-r border-r-gray-400 bg-[#cce3de] ease-in-out duration-500 "
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold m-4 ">Block Refresh</h1>
          <ul className="uppercase">
            <li className="p-4 border-b border-gray-400 bg-[#cce3de]">Home</li>
            <li className="p-4 border-b border-gray-400 bg-[#cce3de]">
              About Us
            </li>
            <li className="p-4 border-b border-gray-400 bg-[#cce3de] ">
              Contact Us
            </li>
            <li className="p-4 border-b border-gray-400 bg-[#cce3de]">
              Membership
            </li>
            <li className="p-4 border-b border-gray-400 bg-[#cce3de]">
              Donate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
