import React from "react";

import obj from "../assests/object.png";
const InnerSight = () => {
  return (
    <div className=" h-[auto] lg:h-[505px] pt-10 pb-10 w-full bg-white items-center justify-center ">
      <div>
        <p className="text-2xl font-semibold leading-none text-center text-black ">
          How does Innersight3D work?
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-col md:flex-row">
          <button className="w-auto h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#F7F7F7] bg-[#F7F7F7] hover:bg-[#14A09D]  group ">
            <p className="font-poppins text-sm font-normal leading-7 text-center text-black group-hover:text-white">
              Clinician Upload
            </p>
          </button>
          <button className="w-auto h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#F7F7F7] bg-[#F7F7F7] hover:bg-[#14A09D]  group ">
            <p className="font-poppins text-sm font-normal leading-7 text-center text-black group-hover:text-white">
              Insight Build 3D Model
            </p>
          </button>
          <button className="w-auto h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#F7F7F7] bg-[#F7F7F7] hover:bg-[#14A09D]  group ">
            <p className="font-poppins text-sm font-normal leading-7 text-center text-black group-hover:text-white">
              Case Published
            </p>
          </button>
          <button className="w-auto h-[40px] min-w-[140px] p-x-4 gap-x-[8px] rounded-full border border-solid border-[#F7F7F7] bg-[#F7F7F7] hover:bg-[#14A09D]  group ">
            <p className="font-poppins text-sm font-normal leading-7 text-center text-black group-hover:text-white">
              View 3D Model
            </p>
          </button>
        </div>
        <div className="flex w-auto h-[auto] lg:h-[41px] justify-center items-center mt-8 flex-col md:flex-row">
          <p className="text-lg font-normal text-center text-[#767C8C]">
            Upload the DCIOM folder containing CT/MRT scans via Inner sight two
            <br />
            click Pacs integration solution or through the web app.
          </p>
        </div>
        <div className="flex justify-center items-center  flex-col md:flex-row">
          <img
            src={obj}
            alt=""
            srcset=""
            className=" w-[404px] h-[255px] mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default InnerSight;
