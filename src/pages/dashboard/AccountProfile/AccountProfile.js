import React from "react";
import Header from "./AccountHeader";
import Aside from "./Accountaside";
import jhon from "../../../assests/Ellipse 14.png";
const AccountProfile = () => {
  return (
    <>
      <div className="">
        <Header />
        <div class=" py-6 lg:px-6 lg:space-x-8 flex flex-col lg:flex-row ">
          <Aside />
          <div class="bg-white lg:p-8 rounded-lg lg:w-[979px] w-auto  ">
            {/* <!-- Title --> */}
            <h2 class="text-2xl font-semibold text-black mb-6">
              Account Settings
            </h2>
            <h2 class="text-md font-semibold text-black mb-2">
              Profile Picture
            </h2>

            {/* <!-- Profile Picture Upload Section --> */}
            <div class="flex items-center mb-6 ">
              <img
                src={jhon}
                alt="profile"
                class="w-20 h-20 rounded-full mr-4"
              />
              <div class="space-x-0 space-y-2 lg:space-x-4">
                <button class="bg-teal-500 text-white py-2 px-4 rounded-md">
                  Upload
                </button>
                <button class="bg-[#F8242429] text-[#F82424] py-2 px-4 rounded-md">
                  Remove
                </button>
              </div>
            </div>

            {/* <!-- Image Size Info --> */}
            <p class="text-sm text-gray-400 mb-8 w-[312px] lg:w-[auto]">
              *Image size should be at least 320px big, and less than 500kb.
              Allowed files .png and .jpg.
            </p>

            {/* <!-- Form Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-gray-100 w-[312px] lg:w-[auto] md:w-auto">
              {/* <!-- First Column --> */}
              <div class="space-y-4">
                <div>
                  <label class="block mb-1 text-gray-400">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">Hospital</label>
                  <input
                    type="text"
                    placeholder="Enter hospital"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter mobile number"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">Date of Birth</label>
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
              </div>

              {/* <!-- Second Column --> */}
              <div class="space-y-4">
                <div>
                  <label class="block mb-1 text-gray-400">User Name</label>
                  <input
                    type="text"
                    placeholder="Enter your user name"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">
                    Surgical Specialty
                  </label>
                  <input
                    type="text"
                    placeholder="Enter surgical speciality"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
                  />
                </div>
                <div>
                  <label class="block mb-1 text-gray-400">Language</label>
                  <select class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]">
                    <option>Select language</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Bio Section --> */}
            <div class="mt-6 w-[312px] lg:w-[auto]  md:w-auto">
              <label class="block mb-1 text-gray-400">Your Bio</label>
              <textarea
                placeholder="Add a short bio"
                rows="3"
                class="w-full px-4 py-2 rounded-md bg-white border border-[#333743] focus:ring-2 text-[#767C8C]"
              ></textarea>
            </div>

            {/* <!-- Buttons --> */}
            <div class="flex justify-end space-x-4 mt-6 w-[312px] lg:w-[auto]  md:w-auto">
              <button class="px-4 py-2 rounded-full border border-teal-500 text-teal-500 hover:bg-[#14A09D] hover:text-white ">
                Cancel
              </button>
              <button class="px-4 py-2 rounded-full bg-[#14A09D] text-white hover:bg-teal-600">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfile;
