import React from 'react'
import Wrapper from '../shared/Wrapper'

export const SubHeading2 = () => {
  return (
    <section> 
    <Wrapper>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <label className="text-xl font-semibold bg-[#B9FF66] px-2 py-1 rounded">
        Case Studies
        </label>
        <p className="text-base">
          <span>Explore Real-Life Examples of Our Proven Digital Marketing </span>
          <br />
          <span>Success through Our Case Studies</span>
        </p>
      </div>
    </Wrapper>
  </section>
  )
}
