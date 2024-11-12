import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import illustration from "@/assets/Illustration.png";
export const ContactBlock = () => {
  return (
    <section className="py-6">
      <Wrapper>
        <div className=" bg-[#F3F3F3] flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Form Section */}
          <div className="p-8 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>

            {/* Radio Buttons */}
            <div className="flex items-center mb-4">
              <label className="mr-4">
                <input type="radio" name="contactReason" value="say" className="mr-2" /> Say
              </label>
              <label>
                <input type="radio" name="contactReason" value="great" className="mr-2" /> Great
              </label>
            </div>

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Send Message Button */}
            <button className="bg-[#000000] text-white py-3 px-6 rounded-lg">
              Send Message
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src={illustration}
              alt="Contact Illustration"
              layout="responsive"
              width={500}
              height={400}
              // className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactBlock;
