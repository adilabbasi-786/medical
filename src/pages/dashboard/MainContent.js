import React from "react";
import Aside from "./aside";
import search from "../../assests/search.png";
import Examcolo from "../../assests/exmple colo.png";

const MainContent = () => {
  return (
    <>
      <div class="flex py-6 px-6 space-x-8">
        {/* <!-- Sidebar with Filters --> */}
        <Aside />

        {/* <!-- Case List Section --> */}
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <div class="flex space-x-2 ">
              {/* Search Input with Icon */}
              <div class="relative w-[427px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  class="p-2 pl-10 border rounded-full w-full"
                />
                <img
                  src={search}
                  alt=""
                  class="absolute top-1 right-3 w-8 h-8 text-gray-500"
                />
              </div>
            </div>
            <div class="flex space-x-4">
              <button class="flex items-center space-x-1 p-2 border rounded-full">
                <span>Sort by</span>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button class="p-2 bg-[#14A09D] text-white rounded-full">
                + Add Case
              </button>
            </div>
          </div>

          {/* Case Cards */}
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[180px]">
              <div class="flex justify-between mb-4">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-[145.95px] h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="mt-[-80px]">
                    <h3 class="text-lg font-semibold">Example Colon</h3>
                    <p class="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span class="bg-[#4BB54329] text-green-600 text-sm px-2 py-1 mt-[-80px] rounded-full">
                    Case Published
                  </span>
                </div>
                <button class="flex items-center space-x-1 p-2 border rounded-full self-start">
                  <svg
                    class="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <span class="text-sm">Set due date</span>
                </button>
              </div>
              <button class="p-2 bg-[#14A09D] text-white rounded-full self-end mt-[-50px] w-[120px] h-[40px]">
                Detail
              </button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[180px]">
              <div class="flex justify-between mb-4">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-[145.95px] h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="mt-[-80px]">
                    <h3 class="text-lg font-semibold">Example Colon</h3>
                    <p class="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span class="bg-[#4BB54329] text-green-600 text-sm px-2 py-1 mt-[-80px] rounded-full">
                    Case Published
                  </span>
                </div>
                <button class="flex items-center space-x-1 p-2 border rounded-full self-start">
                  <svg
                    class="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <span class="text-sm">Set due date</span>
                </button>
              </div>
              <button class="p-2 bg-[#14A09D] text-white rounded-full self-end mt-[-50px] w-[120px] h-[40px]">
                Detail
              </button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[180px]">
              <div class="flex justify-between mb-4">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-[145.95px] h-[148px] rounded-[16px]"
                    src={Examcolo}
                    alt="Case Image"
                  />
                  <div className="mt-[-80px]">
                    <h3 class="text-lg font-semibold">Example Colon</h3>
                    <p class="text-sm text-gray-500">Right colon Cancer</p>
                  </div>
                  <span class="bg-[#4BB54329] text-green-600 text-sm px-2 py-1 mt-[-80px] rounded-full">
                    Case Published
                  </span>
                </div>
                <button class="flex items-center space-x-1 p-2 border rounded-full self-start">
                  <svg
                    class="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3M5 12h14m-7 9v-5m-5 5h10"
                    ></path>
                  </svg>
                  <span class="text-sm">Set due date</span>
                </button>
              </div>
              <button class="p-2 bg-[#14A09D] text-white rounded-full self-end mt-[-50px] w-[120px] h-[40px]">
                Detail
              </button>
            </div>

            {/* Repeat for each case */}
          </div>

          {/* Pagination */}
          <div class="flex justify-center mt-6 space-x-2">
            <button class="px-3 py-1 bg-white border rounded-full hover:bg-[#14A09D] hover:text-white">
              Previous
            </button>
            <button class="px-3 py-1 bg-[#14A09D] text-white rounded-full w-[40px] h-[40px]">
              1
            </button>
            <button class="px-3 py-1 bg-white border rounded-full w-[40px] h-[40px] hover:bg-[#14A09D] hover:text-white">
              2
            </button>
            <button class="px-3 py-1 bg-white border rounded-full w-[40px] h-[40px] hover:bg-[#14A09D] hover:text-white">
              3
            </button>
            <button class="px-3 py-1 bg-white border rounded-full w-[40px] h-[40px] hover:bg-[#14A09D] hover:text-white">
              4
            </button>
            <button class="px-3 py-1 bg-white border rounded-full hover:bg-[#14A09D] hover:text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
