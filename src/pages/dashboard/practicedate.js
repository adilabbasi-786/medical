import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DueDateModal = ({ closeModal }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      {/* Modal Backdrop */}
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        {/* <!-- Calendar Header --> */}
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold text-gray-700">January</h2>
          <div class="flex space-x-2">
            {/* <!-- Prev Button --> */}
            <button class="focus:outline-none">
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Next Button --> */}
            <button class="focus:outline-none">
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Days of the Week --> */}
        <div class="grid grid-cols-7 text-center text-xs font-semibold text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>

        {/* <!-- Calendar Days --> */}
        <div class="grid grid-cols-7 gap-2 text-center mt-4">
          <div class="text-gray-400">01</div>
          <div class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto">
            02
          </div>
          <div class="text-gray-700">03</div>
          <div class="text-gray-700">04</div>
          <div class="text-gray-700">05</div>
          <div class="text-gray-700">06</div>
          <div class="text-gray-700">07</div>

          {/* <!-- Continue with other dates --> */}
          <div class="text-gray-700">08</div>
          <div class="text-gray-700">09</div>
          <div class="text-gray-700">10</div>
          <div class="text-gray-700">11</div>
          <div class="text-gray-700">12</div>
          <div class="text-gray-700">13</div>
          <div class="text-gray-700">14</div>

          <div class="text-gray-700">15</div>
          <div class="text-gray-700">16</div>
          <div class="text-gray-700">17</div>
          <div class="text-gray-700">18</div>
          <div class="text-gray-700">19</div>
          <div class="text-gray-700">20</div>
          <div class="text-gray-700">21</div>

          <div class="text-gray-700">22</div>
          <div class="text-gray-700">23</div>
          <div class="text-gray-700">24</div>
          <div class="text-gray-700">25</div>
          <div class="text-gray-700">26</div>
          <div class="text-gray-700">27</div>
          <div class="text-gray-700">28</div>

          <div class="text-gray-700">29</div>
          <div class="text-gray-700">30</div>
          <div class="text-gray-700">31</div>
          <div class="text-gray-400">01</div>
          <div class="text-gray-400">02</div>
          <div class="text-gray-400">03</div>
          <div class="text-gray-400">04</div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div class="mt-4 flex justify-center space-x-4">
          <button class="px-4 py-2 text-teal-500 border border-teal-500 rounded-full hover:bg-teal-50 focus:outline-none">
            Cancel
          </button>
          <button class="px-4 py-2 text-white bg-teal-500 rounded-full hover:bg-teal-600 focus:outline-none">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default DueDateModal;
