import React, { useState } from "react";
import rightarrow from "../../../assests/right-arrow (1) 1.png";

const Header = () => {
  // State to control dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className=" flex lg:flex-row flex-col px-6 py-4 bg-white shadow-md w-full">
        <div className="w-64">
          <a
            href="/"
            className="text-teal-500 hover:text-teal-600 flex items-center space-x-2"
          >
            <img src={rightarrow} alt="Back arrow" className="w-4 h-4" />
            <span>Back to home</span>
          </a>
        </div>
        {/* Back to Home Link */}
        <div className="w-[979px]">
          {/* Title */}
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>

        {/* Right-side Icons */}
        <div className=" lg:ml-[200px] ">
          <nav className="flex items-center space-x-3 ml-auto">
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <button
              type="button"
              className="p-2  bg-[#14A09D] text-white rounded-full focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="sr-only">Notifications</span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative inline-flex">
              {/* Profile Button and Dropdown Icon */}
              <button
                id="dropdown-account"
                type="button"
                className="flex items-center p-2 rounded-full focus:outline-none"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                aria-label="Dropdown"
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown content */}
              <div
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } absolute right-0 mt-12 w-40 bg-white shadow-lg rounded-lg py-2`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-account"
              >
                <a
                  href="/dashboard/profile"
                  className="block px-4 py-2 text-sm text-gray-700  hover:bg-[#14A09D] hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14A09D] hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14A09D] hover:text-white"
                >
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
