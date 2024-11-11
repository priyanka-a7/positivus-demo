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
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                Search Engine
                                <br />
                                Optimization
                            </h3>
                        </div>
                        <div className="flex-1">
            <Image src={search} alt="search" />
          </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Pay-per-click<br />advertising</h3>
                        </div>
                        <div className="flex-1">
            <Image src={pay} alt="pay" />
          </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Social Media<br />Marketing</h3>
                            <p className="text-sm">Management</p>
                        </div>
                        <div className="flex-1">
            <Image src={social} alt="social" />
          </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Email<br />Marketeing</h3>
                        </div>
                        <div className="flex-1">
            <Image src={email} alt="email" />
          </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Content<br />Creation</h3>
                        </div>
                        <div className="flex-1">
            <Image src={content} alt="content" />
          </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex items-center border p-4 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Analytics and<br />Tracking</h3>
                        </div>
                        <div className="flex-1">
            <Image src={analy} alt="analy" />
          </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ServicesBlock;
