import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RoutePaths } from "../../routePaths";
import {useStickyHeader} from "../../hooks/useStickyHeader";
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import "./Header.css";

interface NavRoute {
  path: RoutePaths,
  label: string
}

const navRoutes: NavRoute[] = [
  {
    path: RoutePaths.BASE,
    label: 'Dashboard'
  },
  {
    path: RoutePaths.TECHNICIANS,
    label: 'Technicians'
  },
  {
    path: RoutePaths.SERVICES,
    label: 'Services'
  },
  {
    path: RoutePaths.CONTACT,
    label: 'Contact'
  },

]

export const Header = () => {
  const isSticky = useStickyHeader();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = (menuState: boolean) => () => setIsSideMenuOpen(menuState);

  return (
    <header className={`header flex items-center ${isSticky ? 'sticky-header' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={RoutePaths.BASE} className=" cursor-pointer">
            <figure className="w-20 h-20">
              <img src={logo} alt="logo" className="block w-full h-full"/>
            </figure>
          </Link>

          <nav className={`w-full h-full fixed top-0 left-0 z-40 bg-fadeBgColor md:relative md:bg-transparent md:block ${isSideMenuOpen ? 'block' : 'hidden'}`} onClick={toggleSideMenu(false)}>
            <ul className="flex gap-[2.7rem] w-[15rem] h-full absolute top-0 right-0 bg-white flex-col justify-center items-center md:flex-row md:relative md:bg-transparent md:w-full" >
              {
                navRoutes.map((link) => (
                  <NavLink
                    to={link.path}
                    className={navClass => navClass.isActive ?
                      "text-primaryColor text-[16px] leading-7 font-[600]" :
                      "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))
              }
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link to={RoutePaths.BASE} className="hidden">
              <figure className="w-16 h-16 rounded-full cursor-pointer">
                <img src={avatar} alt="avatar" className="w-full h-full object-cover object-top rounded-full"/>
              </figure>
            </Link>

            <Link to={RoutePaths.LOGIN}>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] leading-7 rounded-[50px]">
                Logout
              </button>
            </Link>

            <div className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" onClick={toggleSideMenu(true)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};