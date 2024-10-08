import React, { useState } from "react";
import Header from "./AccountHeader";
import userimg from "../../../assests/Ellipse 14.png";
import Aside from "../AccountProfile/Accountaside";
import TeamHistory from "./TeamHistory";
import CreateTeamModal from "./NewTeamModal";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // State to manage which row's dropdown is active
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(index); // Open the clicked one
    }
  };

  return (
    <>
      <Header />
      <div className="py-6 px-4 lg:px-6 lg:space-x-8 flex flex-col lg:flex-row">
        <Aside />
        <div className="p-4 lg:p-6 bg-gray-50 w-full lg:w-[1200px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6 w-full lg:w-[1058px]">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
              My Team
            </h1>
            <button
              onClick={openModal}
              className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600"
            >
              + Create New
            </button>
          </div>

          {/* Search and Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search team"
                className="w-full lg:w-64 bg-gray-100 text-gray-600 p-2 pl-10 rounded-full focus:outline-none"
              />
            </div>

            {/* Team Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="p-4 text-gray-500">Name</th>
                    <th className="p-4 text-gray-500">Email</th>
                    <th className="p-4 text-gray-500">Colleague</th>
                    <th className="p-4 text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[...Array(5)].map((_, index) => (
                    <tr className="border-b" key={index}>
                      <td className="p-4 flex items-center">
                        <img
                          src={userimg}
                          alt="Profile"
                          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full mr-3"
                        />
                        <span className="text-sm lg:text-base">
                          Loki Bright
                        </span>
                      </td>
                      <td className="p-8  text-sm lg:text-base">
                        lokibright@gmail.com
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <img
                            src={userimg}
                            alt="Colleague"
                            className="w-5 h-5 lg:w-6 lg:h-6 rounded-full"
                          />
                          <img
                            src={userimg}
                            alt="Colleague"
                            className="w-5 h-5 lg:w-6 lg:h-6 rounded-full"
                          />
                          <img
                            src={userimg}
                            alt="Colleague"
                            className="w-5 h-5 lg:w-6 lg:h-6 rounded-full"
                          />
                          <span className="text-xs lg:text-sm font-semibold">
                            +4
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right relative">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="relative text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                          <svg
                            className="w-5 h-5 lg:w-6 lg:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v.01M12 12v.01M12 18v.01"
                            ></path>
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === index && (
                          <div className="absolute right-0 mt-2 w-34 bg-white shadow-md rounded-lg z-10 ">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200">
                              <svg
                                className="w-4 h-4 inline-block mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15.232 5.232l-8 8a3 3 0 104.242 4.242l8-8a3 3 0 10-4.242-4.242z"
                                ></path>
                              </svg>
                              Edit
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                              <svg
                                className="w-4 h-4 inline-block mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7L9 17M9 7l10 10"
                                ></path>
                              </svg>
                              Remove
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <TeamHistory />
      {isModalOpen && <CreateTeamModal closeModal={closeModal} />}
    </>
  );
};

export default Main;
