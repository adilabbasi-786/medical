import React from "react";
import bgimage from "../../assests/bgimage.png";

const DetailImageDashboard = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Add content here if needed */}
      </div>
    </>
  );
};

export default DetailImageDashboard;
