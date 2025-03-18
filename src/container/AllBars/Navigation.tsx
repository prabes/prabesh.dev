"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./FooterBar";

const Navigation = ({ children }) => {
  return (
    <div className="flex justify-self-center max-w-6xl p-6 md:p-2 h-screen overflow-hidden">
      <div className="hidden md:flex border-r border-neutral-800">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col ">
        <div className="border-b border-neutral-800">
          <Topbar />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
        <div className="border-t border-neutral-800">
          <Footer />
        </div>
      </div>

      <div className="hidden md:flex p-3 items-center border-l border-neutral-800 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navigation;
