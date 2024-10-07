import React from "react";
import Header from "../AccountProfile/AccountHeader";
import Aside from "../AccountProfile/Accountaside";

const SecurityPage = () => {
  return (
    <>
      <Header />
      <div className="py-6 lg:px-6 lg:space-x-8 flex flex-col lg:flex-row">
        <Aside />
        <div className="p-6 bg-gray-50  w-full lg:w-[1200px]">
          <form className="mt-4">
            <div className="mb-10">
              <label className="block text-sm font-medium text-black">
                Current Password
              </label>
              <input
                type="password"
                className="w-full lg:w-[469px] h-[56px] px-4 py-0 border border-1 border-[#010101] bg-white rounded-[16px]"
                placeholder="Enter current password"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between mb-4">
              <div className="w-full lg:w-[225px] mb-4 lg:mb-0">
                <label className="block text-sm font-medium text-black">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full lg:w-[469px] h-[56px]  px-4 py-0 border border-1 border-[#010101] bg-white rounded-[16px]"
                  placeholder="Enter new password"
                />
              </div>
              <div className="w-full lg:w-[225px] lg:mr-[250px]">
                <label className="block text-sm font-medium text-black">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="w-full lg:w-[469px] h-[56px]  px-4 py-0 border border-1 border-[#010101] bg-white rounded-[16px]"
                  placeholder="Enter confirm password"
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="w-full lg:w-[120px] text-primary px-4 py-2 rounded-full border-[#14A09D] border hover:bg-primary hover:text-white mr-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full lg:w-auto bg-primary text-white px-4 py-2 rounded-full hover:bg-teal-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
