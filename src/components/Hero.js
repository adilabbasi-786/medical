import React from "react";
import hero from "../assests/reactangle.png";

const Hero = () => {
  return (
    <div
      className="w-full min-h-[656px] sm:h-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute top-[200px] left-[20px] sm:left-[50px] md:left-[100px] w-[90%] md:w-[691px] h-auto md:h-[291px] gap-[20px] sm:gap-[30px] md:gap-[40px]">
        <p className="font-poppins text-2xl sm:text-4xl md:text-5xl font-semibold leading-[40px] sm:leading-[50px] md:leading-[72px] text-left">
          Bringing the{" "}
          <span className="font-poppins text-2xl sm:text-4xl md:text-5xl font-semibold leading-[40px] sm:leading-[50px] md:leading-[72px] text-left text-[#14A09D]">
            future of surgery&nbsp;
          </span>
          to the present
        </p>
        <p className="font-poppins text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 text-left text-[#74788D] mt-3 sm:mt-4 md:mt-5">
          We create interactive virtual 3D models to aid medical professionals{" "}
          <br className="hidden sm:block" />
          with treatment planning.
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto h-auto gap-[16px] mt-5">
          <button className="w-full sm:w-[200px] h-[56px] min-w-[140px] rounded-full border-[#14A09D] border-[1px] px-[16px] gap-[8px] bg-[#14A09D] hover:bg-[#0E8F8D]">
            <a className="text-[16px] font-poppins font-normal leading-[28px] tracking-normal text-center text-[#FFFF] px-[16px]">
              Request Demo
            </a>
          </button>
          <button className="w-full hover:bg-[#14A09D] sm:w-[200px] h-[56px] min-w-[140px] rounded-full border-[#14A09D] border-[1px] px-[16px] gap-[8px] mt-2 sm:mt-0 sm:ml-2 group">
            <a className="text-[16px] font-poppins font-normal leading-[28px] tracking-normal text-center text-primary px-[16px] group-hover:text-white">
              Watch Video
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
