import React from 'react';
import { RoutePaths } from "../../routePaths";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ArrowLinkProps {
  to: RoutePaths,
  isLeftAligned?: boolean
}

export const ArrowLink = ({to, isLeftAligned}: ArrowLinkProps) => {
  const alignClassNames = isLeftAligned ? '' : 'mt-[30px] mx-auto'
  return (
    <Link
      to={to}
      className={`w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex
                  items-center justify-center group hover:bg-primaryColor hover:border-none ${alignClassNames}`}
    >
      <BsArrowRight className="group-hover:text-white w-6 h-5"/>
    </Link>
  );
};