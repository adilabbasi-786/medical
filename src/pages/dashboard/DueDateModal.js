import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DueDateModal = ({ closeModal }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={closeModal} // Close modal on backdrop click
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-[320px] p-6 relative"
          onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside content
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={closeModal}
          >
            &#x2715; {/* Close button (X) */}
          </button>
          <h3 className="text-2xl font-bold text-gray-800">Select Due Date</h3>

          {/* Calendar */}
          <div className="mt-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              className="custom-datepicker"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-end">
            <button
              className="w-[120px] text-primary px-4 py-2 rounded-full border-[#14A09D] border hover:bg-primary hover:text-white mr-1"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="w-[120px] bg-primary text-white px-4 py-2 rounded-full hover:bg-teal-700"
              onClick={() => {
                // Add action to handle the selected date
                console.log("Selected date:", selectedDate);
                closeModal();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DueDateModal;
