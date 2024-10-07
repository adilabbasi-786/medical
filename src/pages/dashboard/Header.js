import React, { useState } from "react";
import rightarrow from "../../assests/right-arrow (1) 1.png";

const Header = () => {
  // State to control dropdown visibility
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  // Toggle profile dropdown visibility
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Toggle notification dropdown visibility
  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
  };

  // Example notification data
  const notifications = [
    { title: "New message from John", date: "Oct 5, 2024" },
    { title: "Meeting with HR at 3 PM", date: "Oct 5, 2024" },
    { title: "Project deadline tomorrow", date: "Oct 4, 2024" },
    { title: "New message from John", date: "Oct 5, 2024" },
    { title: "Meeting with HR at 3 PM", date: "Oct 5, 2024" },
    { title: "Project deadline tomorrow", date: "Oct 4, 2024" },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md w-full">
        <div className="w-64">
          {/* Back to Home Link */}
          <a href="/" className="text-teal-500 flex items-center space-x-2">
            <img src={rightarrow} alt="Back arrow" className="w-4 h-4" />
            <span className="opacity-0 lg:opacity-100">Back to home</span>
          </a>
        </div>

        {/* Title */}
        <div className="w-[979px]">
          <h1 className="text-xl font-semibold">Diary</h1>
        </div>

        {/* Right-side Icons */}
        <nav className="flex items-center space-x-3">
          {/* Notification Dropdown */}
          <div className="relative inline-flex">
            <button
              type="button"
              className="p-2 bg-[#14A09D] text-white rounded-full focus:outline-none"
              onClick={toggleNotificationDropdown} // Toggle notification dropdown on click
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

            {/* Notification Dropdown content */}
            <div
              className={`${
                notificationDropdownOpen ? "block" : "hidden"
              } absolute right-0 mt-12 w-[524px] bg-white shadow-lg rounded-lg py-2`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-notification"
            >
              <h3 className="px-4 py-2 text-md font-semibold text-gray-800">
                Notifications
              </h3>
              <ul>
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex justify-between">
                      <span>{notification.title}</span>

                      <span className="text-gray-500 text-xs">
                        {notification.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t flex border-gray-200 h-[40px]">
                <button className="text-left px-4 py-2 text-sm text-[#FBAE17] hover:bg-gray-100 h-[40px] w-[300px] ">
                  Mark all as read
                </button>
                <button className="block text-left px-4 py-2 text-sm  text-white rounded-full bg-[#14A09D]  hover:bg-teal-600">
                  View all notifications
                </button>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative inline-flex">
            <button
              id="dropdown-account"
              type="button"
              className="flex items-center p-2 rounded-full focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={profileDropdownOpen}
              aria-label="Dropdown"
              onClick={toggleProfileDropdown} // Toggle profile dropdown on click
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

            {/* Profile Dropdown content */}
            <div
              className={`${
                profileDropdownOpen ? "block" : "hidden"
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
      </header>
    </>
  );
};

export default Header;
