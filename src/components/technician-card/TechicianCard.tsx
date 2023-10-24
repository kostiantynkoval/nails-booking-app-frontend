import React from 'react';
import {AiFillStar} from "react-icons/ai";
import { RoutePaths } from "../../routePaths";
import { ArrowLink } from "../arrow-link/ArrowLink";

interface TechicianCardProps {
  id: string;
  name: string;
  photo: string,
  avgRating: number,
  totalRatingVotes: number,
  totalCustomers: number,
  specializations: string[],
  salon: string
}

export const TechicianCard = ({
  id,
  name,
  photo,
  specializations,
  totalCustomers,
  totalRatingVotes,
  avgRating,
  salon
}: TechicianCardProps) => {
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="Technician's pickture"/>
      </div>
      <h3 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h3>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specializations.reduce((acc, specialization) => `${acc ? acc + ', ' : acc}${specialization}` , "")}
        </span>
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <AiFillStar fill="rgb(245 158 11)"/>
            <span>{avgRating}</span>
          </div>
          <span className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            ({totalRatingVotes})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h4 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalCustomers} customers
          </h4>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {salon}
          </p>
        </div>
        <ArrowLink to={RoutePaths.TECHNICIANS} isLeftAligned={true} />
      </div>
    </div>
  );
};