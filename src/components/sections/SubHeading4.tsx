import React from 'react'
import Wrapper from '../shared/Wrapper'

export const SubHeading4 = () => {
  return (
<section className="mt-[45px]">
    <Wrapper>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <label className="text-xl font-semibold bg-[#B9FF66] px-2 py-1 rounded">
        Team 
        </label>
        <p className="text-base ml-[60px]">
          <span>Meet the skilled and experienced team behind our</span>
          <br />
          <span>successful digital marketing strategies.</span>
        </p>
      </div>
    </Wrapper>
</section>  )
}
