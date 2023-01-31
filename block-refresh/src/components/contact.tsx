import React from "react";

function contact() {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-[#CCE3DE] text-[#475C54]">
      <div className="w-1/2 px-4 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 text-[#475C54] bg-[#CCE3DE]">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3x text-[#475C54] bg-[#CCE3DE]">
            CONTACT US!
          </h1>

          <p className="mt-4 ">
            Thank you for visiting our website. We value your feedback and are
            here to assist you with any questions or concerns you may have!
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            <label htmlFor="Name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="name"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="companyName" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="companyName"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54] "
                placeholder="Company Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                placeholder="Enter email"
                required
              />
            </div>
          </div>
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
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_69881045.jpg?crop=240%2C0%2C2400%2C1320&wid=4000&hei=2200&scl=0.6"
          className="absolute inset-100 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default contact;
