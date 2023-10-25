import React from 'react';
import { technicians } from "../../__mock__/technicians";
import { TechicianCard } from "../../components/technician-card/TechicianCard";
import { Testimonials } from "../../components/testimonials/Testimonials";

export const Technicians = () => {
  return (
    <>
      <section className="bg-[#FFF9EA]">
        <div className="container text-center">
          <h2 className="heading">Find a Technician</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"/>
            <button className="btn mt-0 rounded-none rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
              technicians.map((technician) => (
                <TechicianCard key={technician.id} {...technician} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our customers say
            </h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque enim excepturi id iste magni.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};