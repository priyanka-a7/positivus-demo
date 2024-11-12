import React from 'react';
import Wrapper from '../shared/Wrapper';

export const TestimonialsBlock = () => {
  return (
    <section className="py-6">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#191A23]">
          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="mb-4 p-4 rounded-full text-gray-700 text-center">
              "This service has completely transformed our online presence."
            </div>
            <div className="p-4 rounded-full text-gray-700 text-center">
              "Our traffic and engagement have grown immensely."
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="mb-4 p-4 rounded-full text-gray-700 text-center">
              "Their team was responsive and helpful at every step."
            </div>
            <div className="p-4 rounded-full text-gray-700 text-center">
              "Our revenue has seen a 30% increase since working with them."
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="mb-4 p-4 rounded-full text-gray-700 text-center">
              "Highly recommend for any business looking to grow online."
            </div>
            <div className="p-4 rounded-full text-gray-700 text-center">
              "The best investment we’ve made for our company’s future."
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TestimonialsBlock;
