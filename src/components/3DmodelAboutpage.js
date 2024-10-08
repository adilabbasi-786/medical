import React from "react";
import kid from "../assests/eb33199055c19fabe5f833283f742ec0.png";
import background from "../assests/02168cbe9bd59d495d0309de49bdb481.png";
import liver from "../assests/liver.png";
import lungs from "../assests/lungs.png";
import chorecetral from "../assests/stomach.png";
import prostate from "../assests/prostarte.png";

const ModelAboutpage = () => {
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

            {/* Card 2 */}
            <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="rounded-t-xl w-[120px] h-[120px]"
                src={lungs}
                alt="Card Image"
              />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Lungs
              </h3>
            </div>
            <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="rounded-t-xl w-[120px] h-[120px]"
                src={liver}
                alt="Card Image"
              />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Liver
              </h3>
            </div>
            <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="rounded-t-xl w-[120px] h-[120px]"
                src={chorecetral}
                alt="Card Image"
              />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Colorectal
              </h3>
            </div>
            <div className="w-[248px] h-[249px] flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="rounded-t-xl w-[120px] h-[120px]"
                src={prostate}
                alt="Card Image"
              />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                prostate
              </h3>
            </div>

            {/* More Organs Card */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelAboutpage;
