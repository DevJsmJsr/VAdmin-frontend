import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import AppLogo from '~assets/vadmin.svg';

const HeaderLanding = () => {
  return (
    <header className="fixed top-0 w-full z-[1] text-white">
      <div className="h-20 container flex items-center">
        <Link to={"/"} className="hidden md:flex">
        <img
            src={AppLogo}
            alt="vadmin logo"
            className="w-[12rem] h-24"
          />
        </Link>
        <MobileNav />
        <div className="flex items-center justify-end flex-1">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding;
