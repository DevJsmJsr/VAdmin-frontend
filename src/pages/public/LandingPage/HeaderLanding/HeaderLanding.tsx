import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { Apple } from "lucide-react";

const HeaderLanding = () => {
  return (
    <header className="fixed top-0 w-full z-[1] text-white">
      <div className="h-20 container flex items-center">
        <Link to={"/"} className="hidden md:flex">
          <Apple className="text-red-500"></Apple>
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
