import React from "react";
import opt1 from "../assests/opt1.png";
import opt2 from "../assests/opt2.png";

const Insigt = () => {
  return (
    <div className="   bg-primary  sm:flex-row lg:h-[450px] sm:h-auto  pt-10 pb-10 w-full">
      <div>
        <p className="text-2xl font-semibold leading-none text-center text-white ">
          Insigt 3D
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-col md:flex-row">
          <div class="w-full md:w-[350px] lg:w-[350px] h-auto flex flex-col  bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
              class="  rounded-t-xl w-[340px] h-auto p-1 m-1"
              alt="Card Image"
              src={opt1}
            />
            <h3 class=" text-gray-800 dark:text-white  text-2xl font-semibold text-left p-1 m-1">
              Scan to 3D model
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400 text-base font-medium text-left p-1 m-1">
              Standard-of-care CT and MRI scans are used as the input. The
              patient’s anatomy is then extracted from the scan.
            </p>
          </div>
          <div class="w-full md:w-[350px] lg:w-[350px] h-auto flex flex-col  bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
              class="  rounded-t-xl w-[340px] h-[200px] p-1 m-1"
              alt="Card Image"
              src={opt2}
            />
            <h3 class=" text-gray-800 dark:text-white  text-2xl font-semibold text-left p-1 m-1">
              Scan to 3D model
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400 text-base font-medium text-left p-1 m-1">
              Standard-of-care CT and MRI scans are used as the input. The
              patient’s anatomy is then extracted from the scan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insigt;
