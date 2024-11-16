import { Apple } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <Link to={"/home"}>{t("labels.home")}</Link>
        <Link to={"/about"}>{t("labels.about")}</Link>
        <Link to={"/team"}>{t("labels.team")}</Link>
      </nav>
    </div>
  );
};

export default MainNav;
