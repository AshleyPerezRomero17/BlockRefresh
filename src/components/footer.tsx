import "../css/Footer.css";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#cce3de] dark:bg-[#475c54] pt-4 pb-8 xl:pt-8 bottom-0 w-[100%]">
      <div className="max-w-screen-lg px-4 mx-auto text-[#709186] xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-[#b4c9c5]">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#475c54] dark:text-[#bee4db] text-md uppercase mb-4">
                Block Refresh
              </h2>
              <ul>
                <li className="mb-4 text-[#475c54] dark:text-[#cce3de]">
                  All Rights Reserved
                </li>
                <li className="mb-4 text-[#475c54] dark:text-[#cce3de]">
                  ©2023 Block Refresh
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#475c54] dark:text-[#bee4db] text-md uppercase mb-4">
                Info
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">Home</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#475c54] dark:text-[#bee4db] text-md uppercase mb-4">
                Contribute
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">Membership</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">Donate</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]">
                  <a href="#">Log In</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-[#bee4db] max-w-xs mx-auto items-center justify-between">
          <a href="https://www.linkedin.com/company/roadtohire/mycompany/">
            <FaLinkedin
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]"
            />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]"
            />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-[#475c54] dark:hover:text-[#cce3de]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
