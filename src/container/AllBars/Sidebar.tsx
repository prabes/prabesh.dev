"use client";

import React from "react";
import IconComponent from "@/components/IconComponent";

const socialLinks = [
  { name: "Github", logoSrc: "/logos/github.svg" },
  //{ name: "Instagram", logoSrc: "/logos/instagram.svg" },
  { name: "Twitter", logoSrc: "/logos/x.svg" },
  { name: "LinkedIn", logoSrc: "/logos/linkedin.svg" },
];

const Sidebar = () => {
  return (
    <section>
      <div className="flex gap-y-3 flex-col flex-grow justify-center">
        {socialLinks.map((socialLink) => {
          return (
            <div className="text-start">
              <IconComponent
                key={socialLink.name}
                name={socialLink.name}
                src={socialLink.logoSrc}
                width={32}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
