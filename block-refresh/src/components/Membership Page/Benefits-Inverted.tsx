import React from "react";

class Invert {}

//Setting the ts type as a React functional Component
const BenefitsInv: React.FC<Invert> = () => {
  return (
    <div>
      <section>
        <hr className="h-px bg-gray-500 border-0 dark:bg-gray-400" />
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <img
                alt="Lady standing in nature"
                src="https://post.healthline.com/wp-content/uploads/2022/04/female-eyes-closed-in-woods-1200-628-facebook-1200x628.jpg"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl text-[#475C54] font-bold sm:text-5xl">
                Explore Membership Benefits
              </h2>

              <p className="text-xl mt-7 text-gray-600">
                Recieve up to 75% off to nature-based educational programs,
                events and a complimentary copy of the organization's annual
                report.
              </p>
              <a
                href="/donate"
                className="mt-8 inline-flex items-center rounded border bg-green-700 px-8 py-3 text-white transition duration-500 hover:bg-transparent hover:text-green-900 focus:outline-none focus:ring active:text-green-700"
              >
                <span className="text-base font-medium"> Get Started </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsInv;
