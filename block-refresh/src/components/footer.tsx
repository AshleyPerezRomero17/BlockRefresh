<<<<<<< HEAD:src/components/footer.tsx
// import "../css/Footer.css";
=======
import React from "react";
>>>>>>> d939b02ca604b28272d2ad7fc19d562a725707db:block-refresh/src/components/footer.tsx
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-5 px-4 grid lg:grid-cols-3 gap-8 text-[#475c54] fixed bottom-0 w-full bg-[#cce3de] left-1/2 -translate-x-1/2">
      <div className="flex flex-col justify-between flex-wrap grow items-center">
        <h1 className=" text-3xl font-bold">Block Refresh</h1>
        <div className="flex justify-between items-center md:w-[75%] my-6 pl-1/2">
          <a
            href="https://www.linkedin.com/company/roadtohire/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between">
              <FaLinkedin size={30} />
            </div>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center">
              <FaFacebookSquare size={30} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center">
              <FaInstagram size={30} />
            </div>
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 text-center">
        <div className="">
          <h6 className="font-medium text-lg text-[#475c54] mb-4">
            Block Refresh
          </h6>
          <ul>
            <li className="py-2 text-sm">All Rights Reserved </li>
            <li className="py-2 text-sm">©2023 Block Refresh</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-lg text-[#475c54] mb-4">Info</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-lg text-[#475c54] mb-4">
            Contribute
          </h6>
          <ul>
            <li className="py-2 text-sm">Membership</li>
            <li className="py-2 text-sm">Donate</li>
            <li className="py-2 text-sm">Log In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
