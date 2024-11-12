import React from 'react'
import Wrapper from '../shared/Wrapper'

export const SubHeading5 = () => {
  return (
    <section className="mt-[45px]">
        <Wrapper>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <label className="text-xl font-semibold bg-[#B9FF66] px-2 py-1 rounded">
        Testimonials 
        </label>
        <p className="text-base ml-[60px]">
          <span>Hear from Our Satisfied Clients: Read Our Testimonials</span>
          <br />
          <span>to Learn More about Our Digital Marketing Services</span>
        </p>
      </div>
        </Wrapper>
    </section>
  )
}
