import React, { useState } from "react";
import Aside from "./aside";
import search from "../../assests/search.png";
import Examcolo from "../../assests/exmple colo.png";
import DueDateModal from "./DueDateModal";
import AddCaseModal from "./AddCaseModal";
import { Link, useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  const [isDuedateModalOpen, setIsDuedateModalOpen] = useState(false);
  const [isAddCaseModalOpen, setIsAddCaseModalOpen] = useState(false);

  const openModal = () => {
    setIsDuedateModalOpen(true);
  };

  const closeModal = () => {
    setIsDuedateModalOpen(false);
  };
  const openAddCaseModal = () => {
    setIsAddCaseModalOpen(true);
  };

  const closeAddCaseModal = () => {
    setIsAddCaseModalOpen(false);
  };
  return (
    <>
      <div className="lg:flex py-6 px-6 space-y-6 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row">
        {/* Sidebar as a top bar in mobile view */}
        <Aside />

        {/* Case List Section */}
        <div className="flex-1">
          <div className="lg:flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              {/* Search Input with Icon */}
              <div className="relative w-[427px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="p-2 pl-10 border rounded-full w-full"
                />
                <img
                  src={search}
                  alt=""
                  className="absolute top-1 right-3 w-8 h-8 text-gray-500"
                />
              </div>
            </div>
            <div className="lg:flex lg:space-x-4 lg:mt-0 mt-4">
              <button className="flex items-center space-x-1 p-2 border rounded-full">
                <span>Sort by</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={openAddCaseModal}
                className="p-2 bg-[#14A09D] text-white rounded-full"
              >
                + Add Case
              </button>
            </div>
          </div>

          {/* Case Cards */}
          <div className="space-y-4">
            {/* Repeatable case card structure */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between lg:h-[180px]">
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-[-90px] lg:space-x-4">
                  <img
                    className="w-full lg:w-[145.95px] h-auto lg:h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Example Colon</h3>
                    <p className="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span className="bg-[#4BB54329] text-green-600 text-sm px-2 py-1  rounded-full">
                    Case Published
                  </span>
                </div>

                <button className="flex items-center space-x-1 p-2 border rounded-full self-center lg:self-start mt-4 lg:mt-0">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <button onClick={openModal}>
                    <span className="text-sm">Set due date</span>
                  </button>
                </button>
              </div>
              <button
                onClick={() => navigate("/dashboard/details")}
                className="p-2 bg-[#14A09D] text-white rounded-full self-center lg:self-end lg:mt-[-50px] w-full lg:w-[120px] h-[40px]"
              >
                Detail
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between lg:h-[180px]">
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-[-90px] lg:space-x-4">
                  <img
                    className="w-full lg:w-[145.95px] h-auto lg:h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Example Colon</h3>
                    <p className="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span className="bg-[#4BB54329] text-green-600 text-sm px-2 py-1  rounded-full">
                    Case Published
                  </span>
                </div>

                <button className="flex items-center space-x-1 p-2 border rounded-full self-center lg:self-start mt-4 lg:mt-0">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <button onClick={openModal}>
                    <span className="text-sm">Set due date</span>
                  </button>
                </button>
              </div>
              <button
                onClick={() => navigate("/dashboard/details")}
                className="p-2 bg-[#14A09D] text-white rounded-full self-center lg:self-end lg:mt-[-50px] w-full lg:w-[120px] h-[40px]"
              >
                Detail
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between lg:h-[180px]">
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-[-90px] lg:space-x-4">
                  <img
                    className="w-full lg:w-[145.95px] h-auto lg:h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Example Colon</h3>
                    <p className="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span className="bg-[#4BB54329] text-green-600 text-sm px-2 py-1  rounded-full">
                    Case Published
                  </span>
                </div>

                <button className="flex items-center space-x-1 p-2 border rounded-full self-center lg:self-start mt-4 lg:mt-0">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <button onClick={openModal}>
                    <span className="text-sm">Set due date</span>
                  </button>
                </button>
              </div>
              <button
                onClick={() => navigate("/dashboard/details")}
                className="p-2 bg-[#14A09D] text-white rounded-full self-center lg:self-end lg:mt-[-50px] w-full lg:w-[120px] h-[40px]"
              >
                Detail
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between lg:h-[180px]">
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-[-90px] lg:space-x-4">
                  <img
                    className="w-full lg:w-[145.95px] h-auto lg:h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">Example Colon</h3>
                    <p className="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span className="bg-[#4BB54329] text-green-600 text-sm px-2 py-1  rounded-full">
                    Case Published
                  </span>
                </div>

                <button className="flex items-center space-x-1 p-2 border rounded-full self-center lg:self-start mt-4 lg:mt-0">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <button onClick={openModal}>
                    <span className="text-sm">Set due date</span>
                  </button>
                </button>
              </div>
              <button
                onClick={() => navigate("/dashboard/details")}
                className="p-2 bg-[#14A09D] text-white rounded-full self-center lg:self-end lg:mt-[-50px] w-full lg:w-[120px] h-[40px]"
              >
                Detail
              </button>
            </div>

            {/* Additional case cards */}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            <button className="px-3 py-1 bg-white border rounded-full hover:bg-[#14A09D] hover:text-white">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#14A09D] text-white rounded-full w-[40px] h-[40px]">
              1
            </button>
            <button className="px-3 py-1 bg-white border rounded-full w-[40px] h-[40px] hover:bg-[#14A09D] hover:text-white">
              2
            </button>
            <button className="px-3 py-1 bg-white border rounded-full w-[40px] h-[40px] hover:bg-[#14A09D] hover:text-white">
              3
            </button>
            <button className="px-3 py-1 bg-white border rounded-full hover:bg-[#14A09D] hover:text-white">
              Next
            </button>
          </div>
        </div>
      </div>
      {isDuedateModalOpen && <DueDateModal closeModal={closeModal} />}
      {isAddCaseModalOpen && (
        <AddCaseModal closeAddCaseModal={closeAddCaseModal} />
      )}
    </>
  );
};

export default MainContent;
