import React from 'react';
import Wrapper from '../shared/Wrapper';
import Link from "next/link";
import Image from "next/image";
import logo2 from "public/Logo2.png";

export const Footer = () => {
  return (
    <footer className="py-6">
      <Wrapper>
        <div className="bg-[#191A23] text-white p-6">
          {/* Top Row: Logo, Navigation, Social Icons */}
          <div className="flex justify-between items-center">
            {/* Logo on the left */}
            <div className="flex md:w-1/3">
              <Link href="/" className="duration-300">
                <div>
                  <Image src={logo2} alt="logo2" />
                </div>
              </Link>
            </div>

            {/* Navigation Links centered */}
            <nav className="flex justify-center gap-4 md:w-1/3 mt-4 md:mt-0">
              <a href="#" className="underline hover:no-underline">About Us</a>
              <a href="#" className="underline hover:no-underline">Service</a>
              <a href="#" className="underline hover:no-underline">Use Case</a>
              <a href="#" className="underline hover:no-underline">Pricing</a>
              <a href="#" className="underline hover:no-underline">Blogs</a>
            </nav>

             {/* Social Icons on the right */}
             <div className="flex space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
              <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="white" />
                <path d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z" fill="black" />
                <path d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z" fill="black" />
                <path d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z" fill="black" />
                <path d="M80 15.0913C80 6.75456 73.2863 0 65 0C56.7137 0 50 6.75456 50 15.0913C50 22.6369 55.4435 28.9047 62.6411 30V19.4726H58.8306V15.0913H62.6411V11.8053C62.6411 8.03245 64.879 5.90264 68.2661 5.90264C69.9597 5.90264 71.6532 6.2069 71.6532 6.2069V9.91886H69.7782C67.9032 9.91886 67.2984 11.0751 67.2984 12.2921V15.0913H71.4718L70.8065 19.4726H67.2984V30C74.496 28.9047 80 22.6369 80 15.0913Z" fill="white" />
                <circle cx="115" cy="15" r="15" fill="white" />
                <path d="M121.996 11.4915C122.685 10.9745 123.306 10.3541 123.788 9.63028C123.168 9.90602 122.444 10.1128 121.72 10.1818C122.479 9.73369 123.03 9.04435 123.306 8.18267C122.616 8.59628 121.824 8.90648 121.031 9.07881C120.342 8.35501 119.411 7.94141 118.377 7.94141C116.378 7.94141 114.758 9.56135 114.758 11.5604C114.758 11.8362 114.793 12.1119 114.861 12.3876C111.863 12.2153 109.174 10.7677 107.382 8.59628C107.072 9.11328 106.9 9.73369 106.9 10.423C106.9 11.6638 107.52 12.7668 108.52 13.4216C107.934 13.3872 107.348 13.2493 106.865 12.9736V13.008C106.865 14.7659 108.106 16.2135 109.76 16.5581C109.485 16.6271 109.14 16.696 108.83 16.696C108.588 16.696 108.382 16.6615 108.14 16.6271C108.588 18.0747 109.933 19.1087 111.518 19.1432C110.277 20.1082 108.726 20.6942 107.037 20.6942C106.727 20.6942 106.452 20.6597 106.176 20.6252C107.761 21.6592 109.657 22.2452 111.725 22.2452C118.377 22.2452 121.996 16.7649 121.996 11.974C121.996 11.8017 121.996 11.6638 121.996 11.4915Z" fill="black" />
              </svg>
            </div>
          </div>

          {/* Middle Row: Contact Information and Subscription Block */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
            {/* Contact Information */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-[#B9FF66] p-1 text-black rounded-md">Contact Us:</span>
              </h3>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
            </div>

            {/* Subscription Block */}
            <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#292A32] rounded-lg p-4">
              <div className="flex items-center w-full gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 rounded-l-lg border-none focus:outline-none text-left"
                />
                <button className="bg-[#B9FF66] text-black py-2 px-4 rounded-r-lg hover:bg-[#A8FF5F] transition-colors">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <hr className="my-6 border-gray-700" />
          <div className="text-left text-sm flex justify-between">
            <span>© 2023 Positivus. All rights reserved.</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
