import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "~components/ui/button";
import { ROUTES } from "~constants/appRoutes";
import AppLogo from '~assets/vadmin_black.svg';

const MobileNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Link to={"/"}>
          <img
            src={AppLogo}
            alt="vadmin logo"
            className="w-[12rem] h-24"
          />
          </Link>
          <nav className="flex flex-col mt-6 items-center gap-3 lg:gap-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
