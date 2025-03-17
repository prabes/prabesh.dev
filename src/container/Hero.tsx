import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
  <section className="container mx-auto px-4">
      {/* Responsive layout container */}
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Row 1 on small/medium, Column 1 on large */}
        <div className="w-full lg:w-1/3">
          {/* Row 1: Image and Name/Role side by side on small/medium */}
          <div className="flex flex-row lg:flex-col">
            {/* Image - 50% width on small/medium, full width on large */}
            <div className="w-1/2 lg:w-full flex items-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/DP.png"
                  alt="DP"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Name and role - 50% width on small/medium, moves to column 2 on large */}
            <div className="w-1/2 lg:hidden pt-8">
              <div>
                🖐 Hey!
                <br />
                <span>I'm</span>
                <span className="text-2xl font-bold pl-2">Prabesh Dahal</span>
              </div>
              <div className="pt-2 pb-4">💻 &nbsp; Software Engineer</div>
            </div>
          </div>
        </div>

        {/* Column 2 on large screens */}
        <div className="w-full lg:w-2/3">
          {/* Name and role section - hidden on small/medium, visible on large */}
          <div className="hidden lg:block pt-8">
            <div>
              🖐 Hey!
              <br />
              <span>I'm</span>
              <span className="text-2xl font-bold pl-2">Prabesh Dahal</span>
            </div>
            <div className="pt-2 pb-4">💻 &nbsp; Software Engineer</div>
          </div>

          {/* Row 2: Description - full width on all screens */}
          <div className="text-justify font-semibold text-gray-400 mt-4 lg:mt-0">
            A Full-Stack Engineer and Web3-Blockchain Enthusiast. I specialize in designing and building seamless
            full-stack experiences, focusing on intuitive frontends and scalable backends mostly with JavaScript, React,
            and Node.js. Now diving into Web3 and blockchain, exploring decentralized technologies to create the next
            generation of DApp solutions. 🚀{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
