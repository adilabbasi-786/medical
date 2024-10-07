import React from "react";

const CreateTeamModal = ({ closeModal }) => {
  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-80  flex justify-center items-center z-60"
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
                Enter Your Team Name
              </label>
              <input
                type="name"
                class="w-full h-[56px] px-4 py-0 border border-1 border-[#010101] bg-white rounded-[8px]"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                invite collegue by email
              </label>
              <input
                type="email"
                class="w-full h-[56px] px-4 py-0 border-1 border border-[#333743] bg-white rounded-[8px]"
                placeholder="Add collegues"
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
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTeamModal;
