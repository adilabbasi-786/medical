import React from "react";

const Aside = () => {
  return (
    <>
      <aside className="w-64 bg-[#F7F7F7] p-4 rounded-lg shadow-md">
        <h2 className="font-semibold mb-4">Categories</h2>
        <div className="space-y-2 mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
              checked
            />
            My Cases
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Sample Cases
          </label>
        </div>

        <h2 className="font-semibold mb-4">Organs</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Kidney
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Lung
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Liver
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Colorectal
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              style={{
                accentColor: "#14A09D",
                backgroundColor: "#14A09D",
              }}
            />
            Prostate
          </label>
        </div>
      </aside>
    </>
  );
};

export default Aside;
