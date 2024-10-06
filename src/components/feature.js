import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-10 px-5 lg:px-20 gap-10 mt-1 w-auto h-auto lg:h-[499px]">
      <h2 className="text-2xl font-semibold">Our Features</h2>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-4xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center border-b-2 border-green-500">
            {/* Icon (Secure Data Access) */}
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 00-4 0v2c0 1.104.896 2 2 2z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11v2m0 4h.01M8 15h8a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 012-2z"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium">Secure Data Access</h3>
          <p className="text-sm text-gray-500">
            Inner sight's surgery planning platform is cloud based and secure
          </p>
        </div>

        {/* Dotted line for large screens */}
        <div className="hidden lg:block h-px flex-1 bg-dotted bg-blue-200"></div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
            {/* Icon (Hospital Integration) */}
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16M10 6V4M14 6V4"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium">Hospital Integration</h3>
          <p className="text-sm text-gray-500">
            We can integrate directly with your hospital PACS
          </p>
        </div>

        {/* Dotted line for large screens */}
        <div className="hidden lg:block h-px flex-1 bg-dotted bg-blue-200"></div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
            {/* Icon (Fast Turnaround) */}
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 6H5v13h14V6h-6m2 4a2 2 0 01-2 2m-4 0a2 2 0 002-2"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium">Fast Turnaround</h3>
          <p className="text-sm text-gray-500">
            We offer the fast turnaround - just two working days from receiving
            the scan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
