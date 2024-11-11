import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import amazon from "@/assets/amazon.png";
import dribble from "@/assets/dribble.png";
import hubspot from "@/assets/hubspot.png";
import notion from "@/assets/notion.png";
import netflix from "@/assets/netflix.png";
import zoom from "@/assets/zoom.png";
import Button from "../shared/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left div */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 lg:leading-[60px]">
            Navigating the digital landscape for success
            </h1>
            
            <p className="mt-6 text-lg max-w-xl leading-[30px]">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.

            </p>
            <div className="mt-5">
              <Button text={"Book a Consultation"} />
            </div>
          </div>

          {/* right div */}
          <div className="flex-1">
            <Image src={hero} alt="Hero Poster" />
          </div>
        </div>

          <div className="flex justify-between py-5 items-center">
          {/* logo */}
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={amazon} alt="amazon" />
            </div>
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={dribble} alt="dribbble" />
            </div>
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={hubspot} alt="hubspot" />
            </div>
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={notion} alt="notion" />
            </div>
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={netflix} alt="netflix" />
            </div>
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <div>
              <Image src={zoom} alt="zoom" />
            </div>
          </Link>
         
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;