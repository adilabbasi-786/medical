import React, { useState } from "react";
import jhon from "../../../assests/Ellipse 14.png";
import userIcon from "../../../assests/user.png";
import usersicon from "../../../assests/users.png";
import lock from "../../../assests/lock.png";
import bell from "../../../assests/bell.png";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="lg:w-[312px] bg-[#F7F7F7] p-6 mt-8 ml-8 rounded-[10px] w-full lg:h-[456px] h-auto">
        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Account Settings</h2>
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none text-gray-500"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Profile Section: Visible on larger screens */}
        <div className="lg:flex flex-col items-center hidden">
          <img
            src={jhon}
            alt="profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">John Smith</h2>
          <p className="text-sm text-gray-500">Member since Aug, 2024</p>
        </div>

        {/* Menu: Always visible on large screens, collapsible on mobile */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:block space-y-4 mt-8 w-[221px]`}
        >
          <Link
            to="/dashboard/profile"
            className={`flex items-center ${
              location.pathname === "/dashboard/profile"
                ? "text-teal-500 "
                : "text-gray-500 hover:text-teal-500"
            }`}
          >
            <img src={userIcon} alt="user icon" className="w-5 h-5 mr-2 " />
            Account
          </Link>

          <Link
            to="/dashboard/profile/notification"
            className={`flex items-center ${
              location.pathname === "/dashboard/profile/notification"
                ? "text-teal-500 "
                : "text-gray-500 hover:text-teal-500"
            }`}
          >
            <img src={bell} alt="notification icon" className="w-5 h-5 mr-2" />
            Notification Preference
          </Link>

          <div className="group">
            <a
              href="#"
              className="flex items-center text-gray-500 group-hover:text-[#14A09D]"
            >
              <img
                src={usersicon}
                alt="my team icon"
                className="w-5 h-5 mr-2 transition duration-200 group-hover:filter invert group-hover:sepia-[.5] group-hover:hue-rotate-[120deg]"
              />
              My Team
            </a>
          </div>

          <a
            href="#"
            className="flex items-center text-gray-500 hover:text-teal-500"
          >
            <img src={lock} alt="security icon" className="w-5 h-5 mr-2" />
            Security
          </a>
        </div>
      </div>
    </>
  );
};

export default Aside;
