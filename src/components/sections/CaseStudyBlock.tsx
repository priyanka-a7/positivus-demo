import React from 'react';
import Wrapper from '../shared/Wrapper';

export const CaseStudyBlock = () => {
  return (
    <section className="bg-gray-100 py-20">
      <Wrapper>
        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
          <div className="flex space-x-8">
            {/* Column 1 */}
            <div className="flex-1">
              <p className="mb-4">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-blue-500 hover:underline text-sm">Learn More</a>
                <svg
                  width="16"
                  height="16"
                  className="ml-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8L4 8" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L12 8L8 4" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="border-l-2 border-gray-700 mx-4"></div>
            
            {/* Column 2 */}
            <div className="flex-1">
              <p className="mb-4">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-blue-500 hover:underline text-sm">Learn More</a>
                <svg
                  width="16"
                  height="16"
                  className="ml-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8L4 8" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L12 8L8 4" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="border-l-2 border-gray-700 mx-4"></div>
            
            {/* Column 3 */}
            <div className="flex-1">
              <p className="mb-4">
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-blue-500 hover:underline text-sm">Learn More</a>
                <svg
                  width="16"
                  height="16"
                  className="ml-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8L4 8" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L12 8L8 4" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CaseStudyBlock;
