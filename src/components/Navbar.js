import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-b border-gray-200 w-[1512] h-[86] dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <a
            className="flex-none text-[#14A09D] focus:outline-none focus:opacity-80 dark:text-white font-poppins text-xl font-semibold leading-7 text-left"
            href="/"
            aria-label="Brand"
          >
            Logo
          </a>

          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6 18 18" />
              </svg>
            ) : (
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="hs-header-base"
          className={`hs-collapse overflow-hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } basis-full grow md:block`}
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center md:gap-1">
                  <a
                    className="p-2 flex items-center text-[#14A09D] hover:text-[#14A09D] focus:text-[#14A09D] rounded-lg focus:outline-none font-poppins text-sm font-normal leading-5 text-left"
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    className="p-2 flex items-center text-[#28283C] hover:text-[#14A09D] focus:text-[#14A09D] rounded-lg focus:outline-none font-poppins text-sm font-normal leading-5 text-left"
                    href="#"
                  >
                    News
                  </a>
                  <a
                    className="p-2 flex items-center text-[#28283C] hover:text-[#14A09D] focus:text-[#14A09D] rounded-lg focus:outline-none font-poppins text-sm font-normal leading-5 text-left"
                    href="#"
                  >
                    Research
                  </a>
                  <a
                    className="p-2 flex items-center text-[#28283C] hover:text-[#14A09D] focus:text-[#14A09D] rounded-lg focus:outline-none font-poppins text-sm font-normal leading-5 text-left"
                    href="#"
                  >
                    Contact
                  </a>
                  <a
                    className="p-2 flex items-center text-[#28283C] hover:text-[#14A09D] focus:text-[#14A09D] rounded-lg focus:outline-none font-poppins text-sm font-normal leading-5 text-left"
                    href="#"
                  >
                    FAQ
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5 ml-5">
                <Link to="/login">
                  <button className="w-[140px] h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#14A09D] hover:bg-[#14A09D]  group ">
                    <p className="font-poppins text-sm font-normal leading-7 text-center text-[#14A09D] group-hover:text-white">
                      Login
                    </p>
                  </button>
                </Link>
                <button className="w-[140px] h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#14A09D] bg-[#14A09D] hover:bg-[#0E8F8D]">
                  <p className="font-poppins text-sm font-normal leading-7 text-center text-[#FFFFFF]">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
