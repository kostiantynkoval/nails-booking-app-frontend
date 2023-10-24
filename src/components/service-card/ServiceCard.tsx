import React from 'react';
import { RoutePaths } from "../../routePaths";
import { ArrowLink } from "../arrow-link/ArrowLink";

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  bgColor: string;
  textColor: string;
  countNumber: number;
}

export const ServiceCard = ({id, name, description, bgColor, textColor, countNumber}: ServiceCardProps): JSX.Element => {
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {description}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <ArrowLink isLeftAligned={true} to={RoutePaths.TECHNICIANS}/>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{background: bgColor, color: textColor, borderRadius: '6px 0 0 6px'}}
        >{countNumber}</span>
      </div>
    </div>
  );
};