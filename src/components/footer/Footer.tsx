import React from 'react';
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from "react-icons/ri";
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import { RoutePaths } from "../../routePaths";
import { Link } from "react-router-dom";

const iconClassName = "group-hover:text-white w-4 h-5";

const socialLinks = [
  {
    path: "https://youtube.com",
    icon: <AiFillYoutube className={iconClassName} />
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className={iconClassName} />
  },
  {
    path: "https://instagram.com",
    icon: <AiOutlineInstagram className={iconClassName} />
  },
  {
    path: "https://linkedin.com",
    icon: <RiLinkedinFill className={iconClassName} />
  }
];

const quickLinks = [
  {
    path: RoutePaths.BASE,
    display: 'Home',
  },
  {
    path: RoutePaths.SERVICES,
    display: 'Services',
  },
  {
    path: RoutePaths.BASE,
    display: 'About Us',
  },
  {
    path: RoutePaths.BASE,
    display: 'Blog',
  }
]


export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <figure className="w-20 h-20">
              <img src={logo} alt="logo" className="block w-full h-full"/>
            </figure>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright &copy; {year} developed by Kostiantyn Koval. All rights reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {
                socialLinks.map(({path, icon}) => (
                  <Link
                    to={path}
                    key={path}
                    className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                                justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    {icon}
                  </Link>
                ))
              }
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map(({path, display}) => (
                <li key={path + display}>
                  <Link to={path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map(({path, display}) => (
                <li key={path + display}>
                  <Link to={path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map(({path, display}) => (
                <li key={path + display}>
                  <Link to={path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};