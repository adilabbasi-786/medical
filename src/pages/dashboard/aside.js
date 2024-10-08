import React, { useState } from "react";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile/Tablet View */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none text-gray-500"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar - Visible on large screens or when toggled on mobile/tablet */}
      <aside
        className={`bg-[#F7F7F7] p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "block w-full h-[500px]" : "hidden"
        } lg:block lg:w-64 lg:h-full lg:static`}
        style={{
          position: isOpen ? "fixed" : "relative",
          top: isOpen ? 0 : "auto",
          left: isOpen ? 0 : "auto",
          zIndex: 10,
          width: isOpen ? "100vw" : "auto",
        }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 lg:opacity-0 right-4 p-2 focus:outline-none text-gray-500"
        >
          {/* Close Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Categories Section */}
        <h2 className="font-semibold mb-4">Categories</h2>
        <div className="space-y-2 mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
              defaultChecked
            />
            My Cases
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Sample Cases
          </label>
        </div>

        {/* Organs Section */}
        <h2 className="font-semibold mb-4">Organs</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Kidney
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Lung
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Liver
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Colorectal
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Prostate
          </label>
        </div>
      </aside>
    </>
  );
};

export default Aside;
