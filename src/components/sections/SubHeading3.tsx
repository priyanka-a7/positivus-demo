import React from 'react'
import Wrapper from '../shared/Wrapper'

export const SubHeading3 = () => {
  return (
    <section className="mt-[45px]"> 
    <Wrapper>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <label className="text-xl font-semibold bg-[#B9FF66] px-2 py-1 rounded">
        Our Working Process 
        </label>
        <p className="text-base ml-[60px]">
          <span>Step-by-Step Guide to Achieving</span>
          <br />
          <span>Your Business Goals</span>
        </p>
      </div>
    </Wrapper>
  </section>
  )
}
