import React, { useState } from "react";
import heartfull from "../../assests/heartful.png";
import lungs from "../../assests/lungs.png";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  // State to manage the toggle switch
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [isMeasuringTool, setIsMeasuringTool] = useState(false);
  const [Isoverlay, setIsoverlay] = useState(true);
  const [isReseview, setReseview] = useState(false);

  const handleToggle = () => {
    setIsFullscreen(!isFullscreen);
  };
  const handleToggle1 = () => {
    setIsMeasuringTool(!isMeasuringTool);
  };
  const handleToggle2 = () => {
    setIsoverlay(!Isoverlay);
  };
  const handleToggle3 = () => {
    setReseview(!isReseview);
  };

  return (
    <div
      className="bg-gray-900 lg:min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    >
      <div className="w-full lg:h-screen grid grid-cols-1 sm:grid-cols-6 gap-4 p-4 h-[1000px]  ">
        {/* Sidebar: Left */}
        <div className="col-span-1 flex flex-col items-start space-y-4">
          <button
            className="text-white text-sm"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Home
          </button>

          <div className="bg-black rounded-lg p-4 w-[170px] space-y-2">
            {/* Red Text Buttons */}
            <button className="text-red-500 block w-full text-left">GDA</button>
            <button className="text-red-500 block w-full text-left">MCA</button>
            <button className="text-red-500 block w-full text-left">RCA</button>
            <button className="text-red-500 block w-full text-left">ICA</button>

            {/* Divider */}
            <hr className="border-gray-700 my-2" />

            {/* Blue Text Buttons */}
            <button className="text-blue-500 block w-full text-left">
              MCV
            </button>
            <button className="text-blue-500 block w-full text-left">
              RGEV
            </button>
            <button className="text-blue-500 block w-full text-left">
              ICV
            </button>
            <button className="text-blue-500 block w-full text-left">
              GTH
            </button>
            <button className="text-blue-500 block w-full text-left">
              RCV
            </button>
          </div>
        </div>

        {/* Main 3D Model Viewer */}
        <div className="col-span-4 relative ">
          <div className="absolute top-4 right-0 flex space-x-4 bg-black ">
            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isFullscreen}
                onChange={handleToggle}
              />
              <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-2 peer-focus:ring-[#14A09D] peer-checked:bg-[#14A09D] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-white text-sm">Fullscreen</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isMeasuringTool}
                onChange={handleToggle1}
              />
              <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-2 peer-focus:ring-[#14A09D] peer-checked:bg-[#14A09D] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-white text-sm">Measuring Tool</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={Isoverlay}
                onChange={handleToggle2}
              />
              <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-2 peer-focus:ring-[#14A09D] peer-checked:bg-[#14A09D] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-white text-sm">overlay</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isReseview}
                onChange={handleToggle3}
              />
              <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-2 peer-focus:ring-[#14A09D] peer-checked:bg-[#14A09D] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ml-3 text-white text-sm">Reseview</span>
            </label>

            {/* Other buttons */}
          </div>

          {/* 3D Object Placeholder */}
          <div className="h-full flex justify-center items-center">
            <div className="w-[300px] h-[300px] rounded-full flex justify-center items-center">
              <img src={heartfull} alt="" />
            </div>
          </div>
        </div>

        {/* Sidebar: Right */}
        <div className="col-span-1 flex flex-col items-center space-y-4 overflow-y-auto">
          {/* Right sidebar images */}
          <img
            src={lungs}
            alt="3D Model Preview"
            className="rounded-lg bg-black"
          />
          <img
            src={lungs}
            alt="3D Model Preview"
            className="rounded-lg bg-black"
          />
          <img
            src={lungs}
            alt="3D Model Preview"
            className="rounded-lg bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
