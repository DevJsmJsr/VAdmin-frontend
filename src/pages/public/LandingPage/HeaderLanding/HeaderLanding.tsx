import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center">
        <MainNav/>
        <MobileNav/>
        <h1 className="flex items-center justify-end flex-1">
          <Link to="/">social</Link>
        </h1>
      </div>
    </header>
  );
};

export default HeaderLanding;
