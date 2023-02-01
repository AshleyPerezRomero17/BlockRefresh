import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  function toggleMenu() {
    var menu: any = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  return (
    <div>
      <nav className="bg-[#cce3de] dark:bg-[#475c54]  shadow ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-24">
            <div className="w-full justify-between flex items-center">
              <Link
                className="flex items-center flex-shrink-0 justify-between"
                to="/"
              >
                <img
                  className="rounded-full w-20"
                  src={Logo}
                  alt="Block Refresh Logo"
                />
                <h1 className="pl-4 text-[#709186] hover:text-[#475c54] dark:hover:text-[#cce3de] text-xl">
                  Block Refresh
                </h1>
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
                    to="/Contact"
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
                  <Link to="/Membership">
                    <button className="p-4 whitespace-nowrap rounded-full text-white bg-[#668378] hover:bg-[#303e39]">
                      Log In
                    </button>
                  </Link>
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
              to="/Contact"
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
