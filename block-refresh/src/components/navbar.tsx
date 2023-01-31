import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
<<<<<<< HEAD:src/components/navbar.tsx
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#475c54] bg-[#cce3de]">
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
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#cce3de]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">Block Refresh</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">About Us</li>
          <li className="p-4 border-b border-gray-400">Contact Us</li>
          <li className="p-4 border-b border-gray-400">Membership</li>
          <li className="p-4 border-b border-gray-400">Donate</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
=======
    <div>
      <nav className="bg-[#cce3de] dark:bg-[#475c54]  shadow ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-24">
            <div className="w-full justify-between flex items-center">
              <Link className="flex-shrink-0" to="/">
                <img
                  className="rounded-full w-20"
                  src={Logo}
                  alt="Block Refresh Logo"
                />
              </Link>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4 text-[#709186]">
                  <Link
                    className="  hover:text-[#475c54] dark:hover:text-[#cce3de] px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="hover:text-[#475c54] dark:hover:text-[#cce3de] px-3 py-2 rounded-md text-sm font-medium"
                    to="/AboutPage"
                  >
                    About Us
                  </Link>
                  <Link
                    className="hover:text-[#475c54] dark:hover:text-[#cce3de] px-3 py-2 rounded-md text-sm font-medium"
                    to="/ContactUs"
                  >
                    Contact Us
                  </Link>
                  <Link
                    className="hover:text-[#475c54] dark:hover:text-[#cce3de] px-3 py-2 rounded-md text-sm font-medium"
                    to="/Membership"
                  >
                    Membership
                  </Link>
                  <Link
                    className="hover:text-[#475c54] dark:hover:text-[#cce3de] px-3 py-2 rounded-md text-sm font-medium"
                    to="/Donate"
                  >
                    Donate
                  </Link>
                  <button className="p-4 whitespace-nowrap rounded-full text-white bg-[#668378] hover:bg-[#303e39]">
                    Log In
                  </button>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#475c54] dark:text-[#cce3de] hover:text-[#b4c9c5] inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <AiOutlineMenu size={20} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-[#b4c9c5] hover:text-[#475c54] dark:hover:text-[#cce3de] block px-3 py-2 rounded-md text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[#475c54] dark:text-[#cce3de] block px-3 py-2 rounded-md text-base font-medium"
              to="/AboutPage"
            >
              About Us
            </Link>
            <Link
              className="text-[#b4c9c5] hover:text-[#475c54] dark:hover:text-[#cce3de] block px-3 py-2 rounded-md text-base font-medium"
              to="/ContactUs"
            >
              Contact Us
            </Link>
            <Link
              className="text-[#b4c9c5] hover:text-[#475c54] dark:hover:text-[#cce3de] block px-3 py-2 rounded-md text-base font-medium"
              to="/Membership"
            >
              Membership
            </Link>
            <Link
              className="text-[#b4c9c5] hover:text-[#475c54] dark:hover:text-[#cce3de] block px-3 py-2 rounded-md text-base font-medium"
              to="/Donate"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
>>>>>>> d939b02ca604b28272d2ad7fc19d562a725707db:block-refresh/src/components/navbar.tsx
