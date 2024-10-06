import React from "react";
import Navbar from "../components/Navbar";
import fb from "../assests/Social Media Login Icons.png";
import gmail from "../assests/gmail.png";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg md:max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Welcome to <span className="text-teal-500">Company</span>
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Join us and unlock a world of possibilities.
          </p>
          <form>
            {/* Form Fields */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hospital"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Hospital Name
              </label>
              <input
                type="text"
                id="hospital"
                placeholder="Enter hospital name"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="specialty"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Surgical Specialty
              </label>
              <input
                type="text"
                id="specialty"
                placeholder="Enter Specialty"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full w-full h-[56px] text-center focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
          </form>

          <div className="flex items-center justify-center mt-4">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="text-gray-600 px-4">or</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4 w-full">
            <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-full w-full md:w-1/2 focus:outline-none focus:shadow-outline h-14">
              <div className="flex items-center justify-center">
                <img src={fb} alt="Facebook" className="h-5 mr-2" />
                Continue with Facebook
              </div>
            </button>
            <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-full w-full md:w-1/2 focus:outline-none focus:shadow-outline h-14">
              <div className="flex items-center justify-center">
                <img src={gmail} alt="Google" className="h-5 mr-2" />
                Continue with Google
              </div>
            </button>
          </div>

          <div className="items-center justify-center text-center font-medium mt-5">
            <p>
              Already have an Account?&nbsp;
              <span className="text-orange-500 cursor-pointer">signIn</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
