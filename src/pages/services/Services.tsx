import React from 'react';
import { serviceCards } from "../../__mock__/serviceCards";
import { ServiceCard } from "../../components/service-card/ServiceCard";

export const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {
            serviceCards.map((item, index) => (
              <ServiceCard key={item.id} countNumber={index + 1} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  );
};