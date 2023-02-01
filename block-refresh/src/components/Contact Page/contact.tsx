import React from "react";

export const Contact = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Gabon_01262022_0122.jpg?crop=203%2C0%2C2733%2C2050&wid=1640&hei=1230&scl=1.6666666666666667"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg
            className="absolute inset-x-0 bottom-0 text-white "
            viewBox="0 0 1160 163"
          >
            <path
              fill="#CCE3DE"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text- sm:text-4xl sm:leading-none text-white ">
                  Contact Us! <br className="hidden md:block" />
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Thank you for visiting our website. We value your feedback and
                  are here to assist you with any questions or concerns you may
                  have!
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-[#CCE3DE] rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Keep in Touch!
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        First name:
                      </label>
                      <input
                        placeholder="First Name"
                        required
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Last name:
                      </label>
                      <input
                        placeholder="Last Name"
                        required
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="companyName"
                        className="inline-block mb-1 font-medium"
                      >
                        Company Name:
                      </label>
                      <input
                        type="companyName"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54] "
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail:
                      </label>
                      <input
                        placeholder="Your Email"
                        required
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Message"
                        className="inline-block mb-1 font-medium"
                      >
                        Message:
                      </label>
                      <textarea
                        className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-[#475C54]
      bg-[#CCE3DE] bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-[#475C54] focus:bg-[#ffffff] focus:border-blue-600 focus:outline-none
    "
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <br></br>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="ml-3 inline-block rounded-lg  bg-[#475C54] px-5 py-3 text-sm fo  font-medium text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
