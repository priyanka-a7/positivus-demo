import React from 'react';
import Wrapper from '../shared/Wrapper';
import cta from "@/assets/cta.png";
import Image from "next/image";

export const CTABlock = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center justify-between bg-[#F3F3F3] p-6 rounded-lg shadow-lg flex-col md:flex-row">
          
          {/* Left Side: Text Content */}
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Let’s make things happen
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <a href="#" className="bg-[#191A23] text-white py-3 px-6 rounded-lg hover:bg-[#333333] transition-colors">
              Get your free proposal
            </a>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-full md:w-1/3 ml-auto">
            <Image
              src={cta}
              alt="cta"
              // className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CTABlock;
