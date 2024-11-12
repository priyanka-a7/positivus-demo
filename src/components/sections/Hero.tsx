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
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="mt-5">
              <Button text={"Book a consultation"} />
            </div>
          </div>

          {/* right div */}
          <div className="flex-1">
            <Image src={hero} alt="Hero Poster" />
          </div>
        </div>

        {/* logos section */}
        <div className="flex justify-between items-center py-5 mt-10">
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={amazon} alt="Amazon" width={100} height={40} />
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={dribble} alt="Dribbble" width={100} height={40} />
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={hubspot} alt="HubSpot" width={100} height={40} />
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={notion} alt="Notion" width={100} height={40} />
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={netflix} alt="Netflix" width={100} height={40} />
          </Link>
          <Link href="/" className="hover:text-[#B9FF66] duration-300">
            <Image src={zoom} alt="Zoom" width={100} height={40} />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
