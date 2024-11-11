import React from 'react';
import Wrapper from '../shared/Wrapper';
import cta from "@/assets/cta.png";
import Image from "next/image";

export const CTABlock = () => {
  return (
    <section className="bg-gray-100 py-20">
      <Wrapper>
        <div className="flex items-center justify-between bg-[#f3f3f3] p-8 rounded-lg shadow-lg">
          
          {/* Left Side: Text Content */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Let’s make things happen
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <a href="#" className="bg-[#191A23] text-white py-3 px-6 rounded-lg hover:bg-[#333333] transition-colors">
              Get in Touch
            </a>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-1/2">
            <Image
              src={cta}
              alt="cta"
            //   width={494}   // Set a fixed width for the image (number, no 'px' needed)
            //   height={394}  // Set a fixed height for the image (number, no 'px' needed)
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CTABlock;
