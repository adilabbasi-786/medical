import React from "react";

const ChangeEmailModal = ({ closeModal }) => {
  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={closeModal} // Close modal on backdrop click
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside content
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={closeModal}
          >
            &#x2715; {/* Close button (X) */}
          </button>
          <h3 className="text-2xl font-bold text-gray-800">Change Email</h3>
          {/* <p className="text-gray-600 mt-2">Update your email address below.</p> */}
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Current Email Address
              </label>
              <input
                type="email"
                class="w-full h-[56px] px-4 py-0 border border-1 border-[#010101] bg-white rounded-[8px]"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                New Email Address
              </label>
              <input
                type="email"
                class="w-full h-[56px] px-4 py-0 border-1 border border-[#333743] bg-white rounded-[8px]"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-[120px]  text-primary px-4 py-2 rounded-full border-[#14A09D] border hover:bg-primary hover:text-white mr-1"
            >
              cancel
            </button>
            <button
              type="submit"
              className="w-[120px] bg-primary text-white px-4 py-2 rounded-full hover:bg-teal-700"
            >
              change
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeEmailModal;
