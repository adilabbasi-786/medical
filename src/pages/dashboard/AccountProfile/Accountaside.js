import React from "react";
import jhon from "../../../assests/Ellipse 14.png";
import userIcon from "../../../assests/user.png";
import usersicon from "../../../assests/users.png";
import lock from "../../../assests/lock.png";
import bell from "../../../assests/bell.png";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-[312px] bg-[#F7F7F7] p-6 mt-8 ml-8 h-[656px] rounded-[10px]">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={jhon}
            alt="profile"
            className="w-24 h-24 rounded-full mb-4"
          />

          {/* User Info */}
          <h2 className="text-lg font-semibold text-gray-800">John Smith</h2>
          <p className="text-sm text-gray-500">Member since Aug, 2024</p>
        </div>

        {/* Menu */}
        <div className="mt-8 space-y-4 w-[221px]">
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
            <img src={bell} alt="user icon" className="w-5 h-5 mr-2" />
            Notification Preference
          </Link>
          <div className="group">
            <a
              href="#"
              className="flex items-center text-gray-500 group-hover:text-[#14A09D]"
            >
              <img
                src={usersicon}
                alt="user icon"
                className="w-5 h-5 mr-2 transition duration-200 group-hover:filter invert group-hover:sepia-[.5] group-hover:hue-rotate-[120deg]"
              />
              My Team
            </a>
          </div>

          <a
            href="#"
            className="flex items-center text-gray-500 hover:text-teal-500"
          >
            <img src={lock} alt="user icon" className="w-5 h-5 mr-2" />
            Security
          </a>
        </div>
      </div>
    </>
  );
};

export default Aside;
