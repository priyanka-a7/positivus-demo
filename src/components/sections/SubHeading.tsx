import React from "react";
import Wrapper from "../shared/Wrapper";

const SubHeading = () => {
  return (
    <section className="mt-[45px]">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <label className="text-xl font-semibold bg-[#B9FF66] px-5 py-1 rounded">
            Services
          </label>
          <p className="text-base ml-[60px]">
            <span>At our digital marketing agency, we offer a range of services to</span>
            <br />
            <span>help businesses grow and succeed online. These services include</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default SubHeading;
