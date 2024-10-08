import React from "react";
import clientPic from "../assests/clientpic.png";

const ClientSays = () => {
  return (
    <>
      <div className="max-w-[1312px] mx-auto p-4 bg-white mt-4 mb-12 lg:h-[429px]">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          What Our Client Says
        </h2>
        <div className="flex justify-end mt-4 space-x-2">
          <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#14A09D]  hover:text-white flex items-center justify-center">
            <span>&larr;</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#14A09D] hover:text-white flex items-center justify-center">
            <span>&rarr;</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-x-6 lg:space-x-12">
          {/* <!-- Testimonial 1 --> */}
          <div className="w-full lg:w-[645px] h-auto p-6 bg-gray-100 rounded-lg shadow-md mb-6 lg:mb-0">
            <p className="text-lg text-[#767C8C] mb-4 border-l-2 border-[#14A09D] top-9 left-9 pl-6">
              ""Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore illo, fuga repellendus corporis adipisci enim eveniet,
              ad nesciunt velit, illum aliquam. Autem itaque corrupti dolore,
              nulla eligendi repellat deleniti maiores. "Lorem Ipsum Dolor Sit
              Amet, Consectetur Adipiscing Elit. "
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={clientPic}
                alt="Client photo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">Kristin Watson</p>
                <p className="text-gray-500 text-sm">Status</p>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="w-full lg:w-[645px] h-auto p-6 bg-gray-100 rounded-lg shadow-md mb-6 lg:mb-0 ">
            <p className="text-lg text-[#767C8C] mb-4 border-l-2 border-[#14A09D] top-9 left-9 pl-6 ">
              ""Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore illo, fuga repellendus corporis adipisci enim eveniet,
              ad nesciunt velit, illum aliquam. Autem itaque corrupti dolore,
              nulla eligendi repellat deleniti maiores. "Lorem Ipsum Dolor Sit
              Amet, Consectetur Adipiscing Elit. Vivamus Sit Amet Mi Nec Massa
              Tincidunt Blandit Et Eu Sem..."
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={clientPic}
                alt="Client photo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">Kristin Watson</p>
                <p className="text-gray-500 text-sm">Status</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Carousel Controls --> */}
      </div>
    </>
  );
};

export default ClientSays;
