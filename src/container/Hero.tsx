import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="pt-4 px-8  flex">
        <div className="p-8 pr-16 item-center">
          <Image
            src="/DP.jpeg"
            alt="Display Picture"
            width={"1000"}
            height={"100"}
          />
        </div>
        <div className="pt-8">
          <div>
            🖐 Hey!
            <br />
            <span>I'm</span>
            <span className="text-2xl font-bold pl-2">Prabesh Dahal</span>
          </div>
          <div className="pt-2 pb-4">💻 &nbsp; Software Engineer</div>
          <div className="text-justify font-semibold text-gray-400">
            A Full-Stack Engineer and Web3-Blockchain Enthusiast. I specialize
            in designing and building seamless full-stack experiences, focusing
            on intuitive frontends and scalable backends mostly with JavaScript,
            React, and Node.js. Now diving into Web3 and blockchain, exploring
            decentralized technologies to create the next generation of DApp
            solutions. 🚀{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
