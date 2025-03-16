import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Navigation = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center">
      {/* Centered Container with Fixed Max Width */}
      <div className="w-full max-w-[1050px] h-screen flex relative">
        {/* Fixed Navbar (Hidden on <lg screens) */}
        <div className="hidden lg:flex w-[100px] h-screen fixed left-1/2 -translate-x-[600px] border-r-2 border-gray-800">
          <Navbar />
        </div>

        {/* Fixed Sidebar (Hidden on <lg screens) */}
        <div className="flex items-center hidden lg:flex w-[100px] h-screen fixed left-1/2 translate-x-[520px] border-l-2 border-gray-700">
          <Sidebar />
        </div>

        {/* Scrollable Content (Without Scrollbar) */}
        <div className="h-screen lg:ml-[25px] lg:mr-[6px] overflow-hidden w-full">
          <Topbar />
          <div className="h-full overflow-y-auto scrollbar-hide w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
