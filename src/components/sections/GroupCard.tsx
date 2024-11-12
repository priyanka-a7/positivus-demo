import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image'; 
import john from "@/assets/john.png";
import jane from "@/assets/jane.png";
import micha from '@/assets/micha.png';
import emily from "@/assets/emily.png";
import brian from "@/assets/brian.png";
import sarah from "@/assets/sarah.png";

export const GroupCard = () => {
  return (
    <section className="py-6">
      <Wrapper>
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={john}
                  alt="john" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">John Smith <br /> CEO and Founder</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
            </p>
          </div>

          {/* Card 2 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={jane}
                  alt="jane" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Jane Doe <br />Director of Operations</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              7+ years of experience in project management and team leadership. Strong organizational and communication skills
            </p>
          </div>

          {/* Card 3 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={micha}
                  alt="Image 3" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Michael Brown<br />Senior SEO Specialist</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 4 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={emily}
                  alt="Image 4" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Emily Davis<br />Digital Marketing Specialist</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              3+ years of experience in digital advertising and social media management. Expertise in Google Ads and Facebook marketing
            </p>
          </div>

          {/* Card 5 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={brian}
                  alt="Image 5" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Brian Lee<br />Head of Marketing</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              Over 10 years of experience in leadership and strategic planning. Expertise in business development and team growth
            </p>
          </div>

          {/* Card 6 */}
          <div className="border p-6 rounded-lg shadow-md bg-white relative">
            <div className="flex items-center">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={sarah}
                  alt="Image 6" 
                  width={100} 
                  height={100} 
                  className="rounded-full" 
                />
              </div>
              {/* Name */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Sarah Wilson<br />Content Strategy Expert</h3>
              </div>
            </div>
            {/* LinkedIn Icon */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="black"/>
                <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
              </svg>
            </div>
            <hr className="my-4" />
            <p className="text-gray-600">
              8+ years of experience in content writing and editorial planning. Expertise in SEO-optimized content creation
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
