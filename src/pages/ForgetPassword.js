import React from "react";
import Navbar from "../components/Navbar";
import fb from "../assests/Social Media Login Icons.png";
import gmail from "../assests/gmail.png";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg md:max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Reset Password
          </h2>
          <p className="text-gray-600 text-center mb-6">
            we will send you email you can reset password
          </p>
          <form>
            {/* Form Fields */}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 text-lg font-normal"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="w-full h-12 px-4 py-2 border border-[#333743] rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full w-full h-[56px] text-center focus:outline-none focus:shadow-outline"
            >
              Reset password
            </button>
          </form>

          <div className="items-center justify-center text-center font-medium mt-5">
            <p>
              Already a member?&nbsp;
              <Link to="/login">
                <span className="text-orange-500 cursor-pointer">signin</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
