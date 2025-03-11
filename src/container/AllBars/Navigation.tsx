import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Navigation = ({ children }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Navbar />
        </div>
        <div className="col-span-10">
          <Topbar />
          <div>{children}</div>
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
