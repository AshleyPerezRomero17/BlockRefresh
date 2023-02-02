import React from "react";
import { Link } from "react-router-dom";

class Levels {}

//Setting the ts type as a React functional Component
const MembershipLevels: React.FC<Levels> = () => {
  return (
    <div>
      <hr className="h-px bg-gray-500 border-0 dark:bg-gray-400" />
      <section>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl text-[#475C54] font-bold sm:text-4xl">
                Membership Levels
              </h2>

              <p className=" text-xl mt-8 text-gray-600">
                Each time you donate you not only tremendously make a positive
                impact on the environment but can also receive extra perks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Link
                className="block rounded-xl border-2 border-gray-200 p-4 shadow-sm transition duration-500 hover:border-gray-300 hover:ring-1 hover:ring-gray-500 focus:outline-none focus:ring"
                to="/LogIn"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-[#475C54] font-bold">Fresh Donater</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  The beginning rank with all of the normal benefits of a
                  member.
                </p>
              </Link>

              <Link
                className="block rounded-xl border-2 border-gray-200 p-4 shadow-sm transition duration-500 hover:border-gray-300 hover:ring-1 hover:ring-gray-500 focus:outline-none focus:ring"
                to="/LogIn"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-[#475C54] font-bold">
                  Fresh Champion Club{" "}
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Access to a member-only online community and forum.
                </p>
              </Link>

              <Link
                className="block rounded-xl border-2 border-gray-200 p-4 shadow-sm transition duration-500 hover:border-gray-300 hover:ring-1 hover:ring-gray-500 focus:outline-none focus:ring"
                to="/LogIn"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-[#475C54] font-bold">
                  {" "}
                  Fresh Nature Guardian
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  A complimentary membership to a sister organization or partner
                  group.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipLevels;
