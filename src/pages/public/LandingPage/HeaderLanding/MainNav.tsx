import { Apple } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "~components/ui/button";
import { ROUTES } from "~constants/appRoutes";

const MainNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 lg:gap-4 ml-8">
        <Link to="#home">{t("labels.home")}</Link>
        <Link to="#about">{t("labels.about")}</Link>
        <Button
            onClick={() => {
              navigate(ROUTES.LOGIN);
            }}
          >
            {t("labels.get_started")}
        </Button>
      </nav>
    </div>
  );
};

export default MainNav;
