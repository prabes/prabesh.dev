"use client";

import React from "react";
import { MapPin } from "@deemlol/next-icons";

const Topbar = (props: {}) => {
  return (
    <section className=" p-6 flex flex-start overflow-y-auto scrollbar-hide border-solid border-b-2 border-gray-700 ">
      <div className="w-full flex justify-between items-end">
        <span className="font-bold text-2xl  text-gray-400">prabesh.dev</span>
        <div className="flex items-end">
          <MapPin size={24} color="#999999" />
          &nbsp;{" "}
          <span className="text-[14px] font-semibold text-gray-500 ">
            Kathmandu, Nepal
          </span>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
