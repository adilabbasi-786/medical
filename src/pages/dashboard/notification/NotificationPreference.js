import React, { useState } from "react";
import AccountHeader from "../AccountProfile/AccountHeader";
import Aside from "../AccountProfile/Accountaside";
import ChangeEmailModal from "./ChangeEmailModal";
import TeamHistory from "../myteams/TeamHistory";

const NotificationPreference = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AccountHeader />
      <div class=" py-6 lg:px-6 space-x-8 flex flex-col lg:flex-row">
        <Aside />
        <div class="mx-auto bg-white shadow-md rounded-lg lg:p-6 w-auto lg:w-[979px] ">
          {/* <!-- Available Actions Section --> */}
          <h2 class="text-xl font-semibold mb-6">Available Actions</h2>
          <div class="space-y-4">
            {/* <!-- Email Verification --> */}
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
              <div class="flex items-center space-x-4">
                <div class="text-2xl">📧</div>
                <div>
                  <h3 class="font-medium text-lg">Email Verification</h3>
                  <p class="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <button
                onClick={openModal}
                class="bg-[#14A09D] text-white px-4 py-2 ml-5 rounded-full hover:bg-[#0E8F8D] "
              >
                Change
              </button>
            </div>

            {/* <!-- Two Factor Authorization --> */}
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
              <div class="flex items-center space-x-4">
                <div class="text-2xl">🔒</div>
                <div>
                  <h3 class="font-medium text-lg">Two Factor Authorization</h3>
                  <p class="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <button class="bg-[#14A09D] text-white ml-2 px-4 py-2 rounded-full hover:bg-[#0E8F8D]">
                Enable
              </button>
            </div>

            {/* <!-- Delete Account --> */}
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
              <div class="flex items-center space-x-4">
                <div class="text-2xl">🗑️</div>
                <div>
                  <h3 class="font-medium text-lg">Delete Account</h3>
                  <p class="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <button class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 ">
                Delete
              </button>
            </div>
          </div>

          {/* <!-- Notifications Section --> */}
          <div class="mt-8">
            <h2 class="text-xl font-semibold mb-4">Notifications</h2>
            <p class="text-gray-500 text-sm mb-4 t">
              Notify me when modal or operation is due.
            </p>

            <h2 class="text-md font-semibold mb-4">Notify me when..</h2>

            {/* <!-- Notify me when... --> */}
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <p class="text-gray-600">A model is ready</p>
                <div class="flex space-x-4">
                  <div class="flex items-center">
                    <input type="checkbox" checked class="w-5 h-5   bg-black" />
                    <span class="ml-2">Email</span>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 p-t-4 border-1 border-[#14A09D] bg-[#14A09D] rounded-l-md  text-white"
                    />
                    <span class="ml-2">SMS</span>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center">
                <p class="text-gray-600">I have an operation due today</p>
                <div class="flex space-x-4">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 text-teal-500 border-gray-300 rounded"
                    />
                    <span class="ml-2">Email</span>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      checked
                      class="w-5 h-5 text-teal-500 border-gray-300 rounded"
                    />
                    <span class="ml-2">SMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ChangeEmailModal closeModal={closeModal} />}
    </>
  );
};

export default NotificationPreference;
