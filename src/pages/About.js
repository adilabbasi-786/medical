import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about1 from "../assests/about1.png";
import about2 from "../assests/aboutperson2.png";
import ModelAboutpage from "../components/3DmodelAboutpage";
import ClientSays from "../components/ClientSays";

const About = () => {
  return (
    <div>
      <Navbar />
      <div class="max-w-[1312px] mx-auto mt-3">
        {/* <!-- First Section --> */}
        <section class="custom-section-1 px-4 py-10 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Side Text --> */}
          <div class="flex flex-col justify-center">
            <h1 className="w-[170px] h-[48px] text-[18px] px-3 pt-2 gap-2 rounded-l-sm bg-[#14A09D29] text-[#14A09D] justify-center text-center">
              What About us
            </h1>
            <h1 class="text-[40px] md:text-4xl font-semibold text-[#2A313D] mb-4 w-auto ">
              Joining Hands With{" "}
              <span class="text-[#14A09D]">Company Name</span>
            </h1>
            <p class="text-[#2A313D] text-opacity-70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a augue est praesent at risus in dolor viverra facilisis. Vivamus
              fermentum lorem neque, non congue.
            </p>

            {/* <!-- List Section --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#2A313D] text-opacity-70 mb-8">
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Intervention Success
                </li>
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Quality of Care
                  Services
                </li>
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Client Satisfaction
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Happy with Staff
                </li>
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Infection Prevention
                </li>
                <li class="flex items-center">
                  <span class="text-[#14A09D] mr-2">✔</span>Patient Experience
                </li>
              </ul>
            </div>

            {/* <!-- Request Demo Button --> */}
            <button class="bg-[#14A09D] text-white py-2 px-6 rounded-full hover:bg-[#0E8F8D] w-[200px] h-[56px]">
              Request Demo
            </button>
          </div>

          {/* <!-- Right Side Image --> */}
          <div class="flex justify-center items-center">
            <img
              src={about1}
              alt="Doctor with tech"
              class="rounded-xl h-[368px]"
            />
          </div>
        </section>

        {/* <!-- Space between sections --> */}
        <div class="h-12"></div>

        {/* <!-- Second Section --> */}
        <section class="custom-section-2 px-4 py-10 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Side Image --> */}
          <div class="flex justify-center items-center">
            <img
              src={about2}
              alt="Brain in hands"
              class="rounded-xl h-[368px]"
            />
          </div>

          {/* <!-- Right Side Impact Numbers --> */}
          <div class="text-[#2A313D] flex flex-col justify-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              Our Impact Number
            </h2>
            <p class="text-[#2A313D]  text-opacity-70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a augue est praesent at risus in dolor viverra facilisis. Vivamus
              fermentum lorem neque, non congue.
            </p>

            {/* <!-- Stats Section --> */}
            <div class="grid grid-cols-2 gap-8 text-[#14A09D]">
              <div>
                <p class="text-2xl font-bold">250+</p>
                <p class="text-[#2A313D]  text-opacity-70">
                  Professional Doctors
                </p>
              </div>
              <div>
                <p class="text-2xl font-bold">4.5K+</p>
                <p class="text-[#2A313D] text-opacity-70">Patients Served</p>
              </div>
              <div>
                <p class="text-2xl font-bold">80K+</p>
                <p class="text-[#2A313D]  text-opacity-70">
                  Total Reports Generated
                </p>
              </div>
              <div>
                <p class="text-2xl font-bold">2.5K+</p>
                <p class="text-[#2A313D]  text-opacity-70">
                  Hospitals Using Our Service
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModelAboutpage />
      <ClientSays />

      {/* 3d model in about us page */}
      <div
        className="bg-[#14A09D] py-12 px-6 md:px-12 text-center rounded-lg w-full md:w-[1312px] h-auto md:h-[261px] mb-12 lg:ml-[300px]"
        style={{
          // backgroundImage: `url(${Faqbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Get your first demo 3D model
        </h1>
        <p className="text-white text-lg mb-8">
          You can register on our platform by using the Login button above or
          <br className="md:hidden" />
          submit your contact details here
        </p>
        <button className="bg-white text-[#14A09D] hover:text-white hover:bg-teal-700 font-semibold py-3 px-6 rounded-full ">
          Request Demo
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
