import React from 'react';
import Wrapper from '../shared/Wrapper';
import search from "@/assets/search.png";
import pay from "@/assets/pay.png";
import social from "@/assets/social.png";
import email from "@/assets/email.png";
import content from "@/assets/content.png";
import analy from "@/assets/analy.png";
import Image from "next/image";

export const ServicesBlock = () => {
    return (
        <section>
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20 max-w-screen-xl mx-auto">

                    {/* Card 1 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#F3F3F3' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Search Engine</span>
                                <br />
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Optimization</span>
                            </h3>

                            <a href="#" className="flex items-center text-sm mt-2 text-[#191A23]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
                                </svg>
                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={search} alt="Search Engine Optimization" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#B9FF66' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-white px-2 py-1 rounded">Pay-per-click</span>
                                <br />
                                <span className="bg-white px-2 py-1 rounded">Advertising</span>
                            </h3>
                            <a href="#" className="flex items-center text-sm mt-2 text-[#191A23]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
                                </svg>
                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={pay} alt="Pay-per-click Advertising" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#191A23' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-white px-2 py-1 rounded">Social Media</span>
                                <br />
                                <span className="bg-white px-2 py-1 rounded">Marketing</span>
                            </h3>
                            <a href="#" className="flex items-center text-sm mt-2 text-[#FFFFFF]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="black" />
                                </svg>

                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={social} alt="Social Media Marketing" />
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#F3F3F3' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Email</span>
                                <br />
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Marketing</span>
                            </h3>
                            <a href="#" className="flex items-center text-sm mt-2 text-[#191A23]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
                                </svg>
                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={email} alt="Email Marketing" />
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#B9FF66' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-white px-2 py-1 rounded">Content</span>
                                <br />
                                <span className="bg-white px-2 py-1 rounded">Creation</span>
                            </h3>
                            <a href="#" className="flex items-center text-sm mt-2 text-[#191A23]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
                                </svg>
                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={content} alt="Content Creation" />
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex items-center p-4 rounded-lg shadow-md" style={{ backgroundColor: '#191A23' }}>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Analytics and</span>
                                <br />
                                <span className="bg-[#B9FF66] px-2 py-1 rounded">Tracking</span>
                            </h3>
                            <a href="#" className="flex items-center text-sm mt-2 text-[#FFFFFF]">
                                <svg width="10" height="10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                                    <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="black" />
                                </svg>

                                Learn More
                            </a>
                        </div>
                        <div className="flex-1">
                            <Image src={analy} alt="Analytics and Tracking" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ServicesBlock;
