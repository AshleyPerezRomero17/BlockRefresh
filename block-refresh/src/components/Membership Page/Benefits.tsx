import React from "react";
const natureBooks = require("../Images/nature-books.webp");
class Benefitsprops {}

//Setting the ts type as a React functional Component
const Benefits: React.FC<Benefitsprops> = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                src={natureBooks}
                alt="tree in a big field"
                className="absolute inset-0 w-full object-cover py-20"
              />
            </div>

            <div className="lg:py-24">
              <h2 className=" text-3xl text-[#475C54] font-bold sm:text-5xl">
                Make a Donation To Become a Member Automatically
              </h2>

              <p className="text-xl mt-7 text-gray-600">
                Donate right away to join The Block-Fresh premium membership. We
                can work together to develop a solution for a more sustainable
                future for both people and the environment.
              </p>

              <a
                href="/donate"
                className="mt-8 inline-flex items-center rounded border bg-green-700 px-8 py-3 text-white transition duration-500 hover:bg-transparent hover:text-green-900 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-base font-medium"> Give Monthly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
