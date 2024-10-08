import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchbar from "../assests/Icon.png";
import Faqbackground from "../assests/FAQ background.png";

const FAQ = () => {
  // State to track which accordion is open
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently asked question
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Answers to the most frequently asked questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <img src={searchbar} alt="" className="absolute left-4 top-4 h-5" />
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="w-full h-12 px-14 py-2 border mb-8 rounded-full bg-[#F7F7F7] border-[#F7F7F7] text-gray-700 focus:outline-none focus:border-teal-500 pl-10"
            />
          </div>
          <div className="hs-accordion-group">
            {[
              {
                question: "Can I cancel at anytime?",
                answer:
                  "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
              },
              {
                question: "My team has credits. How do we use them?",
                answer:
                  "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
              },
              {
                question: "How does Preline's pricing work?",
                answer:
                  "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
              },
              {
                question: "How secure is Preline?",
                answer:
                  "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
              },
              {
                question: "How do I get access to a theme I purchased?",
                answer:
                  "If you lose the link for a theme you purchased, don't panic! We've got you covered.",
              },
              {
                question: "Upgrade License Type",
                answer:
                  "There may be times when you need to upgrade your license from the original type you purchased.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`hs-accordion rounded-xl p-6 dark:hs-accordion-active:bg-white/10 ${
                  activeAccordion === index ? "bg-gray-100" : ""
                }`}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded={activeAccordion === index}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`${
                      activeAccordion === index ? "hidden" : "block"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`${
                      activeAccordion === index ? "block" : "hidden"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    activeAccordion === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-800 dark:text-neutral-200">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          class="bg-[#14A09D] py-12 px-6 text-center rounded-lg"
          style={{
            backgroundImage: `url(${Faqbackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 class="text-white text-4xl font-bold mb-4">
            Get your first demo 3D model
          </h1>
          <p class="text-white text-lg mb-8">
            You can register on our platform by using the Login button above or{" "}
            <br /> submit your contact details here
          </p>
          <button class="bg-white text-teal-500 font-semibold py-3 px-6 rounded-full">
            Request Demo
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
