import React, { useState, useEffect } from "react";
import uploadimage from "../../assests/upload icon.png";

const AddCaseModal = ({ closeAddCaseModal }) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = () => {
    setUploading(true);
    setFileUploaded(false);
    setProgress(0);

    // Simulate file upload with progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          setFileUploaded(true);
          return 100;
        }
        return prevProgress + 10; // Increase by 10% every 200ms
      });
    }, 200);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold">Add Case</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeAddCaseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form Start */}
          <form className="mt-6 space-y-4">
            {/* Title Input */}
            <div>
              <label
                htmlFor="title"
                className="block text-[16px] font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Description"
                className="mt-1 p-2 w-full border rounded-[8px] border-1 border-solid border-[#333743] focus:ring focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Description Input */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter case description"
                rows="4"
                className="mt-1 p-2 w-full border rounded-[8px] border-1 border-solid border-[#333743] focus:ring focus:ring-teal-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Select Organ */}
            <div>
              <label
                htmlFor="organ"
                className="block text-sm font-medium text-gray-700"
              >
                Select Organ
              </label>
              <select
                id="organ"
                name="organ"
                className="mt-1 p-2 w-full border rounded-[8px] border-1 border-solid border-[#333743] focus:ring focus:ring-teal-500 focus:outline-none"
              >
                <option>Select organ</option>
              </select>
            </div>

            {/* Upload File */}
            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700"
              >
                Upload File
              </label>
              <div className="mt-2 p-6 border-2 border-dashed rounded-[8px] border-1  border-[#333743] flex justify-center items-center">
                <div className="text-center">
                  <div className="flex justify-center text-gray-500 mb-2">
                    <img src={uploadimage} alt="" />
                  </div>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-[#2A313D] text-sm font-medium text-center leading-6 font-poppins"
                  >
                    Drag & Drop image to upload
                  </label>
                  <p className="text-[#2A313D] text-sm font-medium text-center leading-6 font-poppins">
                    or
                  </p>

                  {!uploading && !fileUploaded && (
                    <button
                      type="button"
                      className="mt-1 px-4 py-2  w-40 h-10 min-w-[140px]  gap-2 rounded-full border border-[#14A09D] opacity-100 text-[#14A09D] hover:bg-[#14A09D] hover:text-white"
                      onClick={handleFileUpload}
                    >
                      Browse file
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {uploading && (
              <div className="mt-4">
                <div className="w-full h-1 bg-gray-300">
                  <div
                    className="h-1 bg-teal-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-gray-500">Uploading... {progress}%</p>
              </div>
            )}

            {/* Success Message */}
            {fileUploaded && !uploading && (
              <div className="mt-4">
                <div className="w-full h-1 bg-teal-500"></div>
                <p className="mt-2 text-green-600 font-bold">
                  Upload successful!
                </p>
              </div>
            )}

            {/* Buttons */}
            {!fileUploaded && !uploading && (
              <div className="flex justify-start space-x-4">
                <button
                  onClick={closeAddCaseModal}
                  type="button"
                  className="px-4 py-2 focus:outline-none rounded-full border border-[#14A09D] opacity-100 text-[#14A09D] hover:bg-[#14A09D] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#14A09D] text-white rounded-full focus:outline-none hover:bg-[#0E8F8D]"
                >
                  Upload
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCaseModal;
