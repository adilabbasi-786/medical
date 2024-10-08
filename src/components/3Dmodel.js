import React from "react";
import kid from "../assests/eb33199055c19fabe5f833283f742ec0.png";
import background from "../assests/02168cbe9bd59d495d0309de49bdb481.png";
import { Link } from "react-router-dom";

const Model = () => {
  return (
    <>
      <div className="lg:h-[400px] sm:h-auto pt-10 pb-10 w-full">
        <div>
          <p className="text-2xl font-semibold leading-none text-center text-[#2A313D]">
            We are Creating 3D Model For
          </p>

          {/* Card Container */}
          <div className="flex justify-center gap-4 mt-4 flex-col items-center md:flex-row">
            {/* Card 1 */}
            <Link to="/dashboard/detailimagedashboard">
              <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <img
                  className="rounded-t-xl w-[120px] h-[120px]"
                  src={kid}
                  alt="Card Image"
                />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Kidney
                </h3>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/dashboard/detailimagedashboard">
              <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <img
                  className="rounded-t-xl w-[120px] h-[120px]"
                  src={kid}
                  alt="Card Image"
                />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Kidney
                </h3>
              </div>
            </Link>

            {/* More Organs Card */}
            <div
              className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-primary border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <p className="text-2xl text-center font-semibold text-white">
                More Organs
                <br />
                Supported Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
