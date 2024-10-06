import React from "react";
import Navbar from "../components/Navbar";
import fb from "../assests/Social Media Login Icons.png";
import gmail from "../assests/gmail.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg md:max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Welcome to <span className="text-teal-500">Company</span>
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Sign in to continue to your account.
          </p>
          <form>
            {/* Form Fields */}

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
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-5 border border-gray-400 rounded-md checked:bg-orange-500 checked:border-transparent focus:outline-none relative"
                  />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                    <svg
                      className="hidden w-4 h-4 text-white checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <Link to="/forgetpassword">
                  <p className="text-orange-500 cursor-pointer">
                    Forget password
                  </p>
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full w-full h-[56px] text-center focus:outline-none focus:shadow-outline"
              >
                Signup
              </button>
            </Link>
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
              Not a member yet?&nbsp;
              <Link to="/signup">
                <span className="text-orange-500 cursor-pointer">signUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
