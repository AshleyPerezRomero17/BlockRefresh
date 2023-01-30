import React from "react";

class Hero {}

//Setting the ts type as a React functional Component
const MembershipHero: React.FC<Hero> = () => {
  return (
    <div>
      <section
        className="relative 
      bg-[url(https://i.imgur.com/yS8N94l.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/40 sm:to-white/10"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-100">
              Help us reach our goals
              <strong className="block font-extrabold text-green-700">
                Become a member today
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed"></p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/donate"
                className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow transition duration-500 hover:bg-green-900 focus:outline-none focus:ring active:bg-green-700 sm:w-auto"
              >
                Donate
              </a>

              <a
                href="/donate"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-700 shadow transition duration-500 hover:bg-gray-300 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipHero;
