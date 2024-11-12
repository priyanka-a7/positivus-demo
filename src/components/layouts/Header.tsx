import Image from "next/image";
import React from "react";
import logo from "public/logo.png";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90">
      <Wrapper>
        <div className="flex justify-between py-5 items-center">
          {/* logo */}
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={logo} alt="Panaverse DAO" />
            </div>
          </Link>
          {/* navigation bar */}
          <ul className="flex items-center gap-x-4 sm:gap-x-8 text-[16px]">
            <li>
              <Link href="/about-us" className="hover:text-[#B9FF66] duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B9FF66] duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:text-[#B9FF66] duration-300">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-[#B9FF66] duration-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#B9FF66] duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/request-quote"
                className="hover:text-[#B9FF66] duration-300 border border-black px-4 py-2 rounded"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
