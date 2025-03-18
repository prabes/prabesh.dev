"use client";

import React from "react";
import { MapPin } from "@deemlol/next-icons";

const Topbar = () => {
  return (
    <section className=" p-6 flex flex-start overflow-y-auto scrollbar-hide ">
      <div className="w-full flex flex-col items-start md:flex-row justify-between items-end">
        <span className="font-semibold text-2xl  text-slate-300">
          prabesh.dev
        </span>
        <div className="flex items-end pt-1">
          <MapPin size={24} color="#999999" />
          &nbsp;{" "}
          <span className="text-xs md:text-sm font-semibold text-slate-400 ">
            Kathmandu, Nepal
          </span>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
