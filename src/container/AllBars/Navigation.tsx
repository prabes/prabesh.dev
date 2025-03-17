import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Navigation = ({ children }) => {
  return (
    <div className=" flex justify-self-center max-w-6xl">
      <Navbar />
      <div className="">
        <div className="sm:flex-col">
          <Topbar />
        </div>
        {children}
      </div>
      <div className="p-8 flex items-center">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navigation;
