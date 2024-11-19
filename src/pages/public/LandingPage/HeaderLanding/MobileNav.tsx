import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~components/ui/sheet";
import { AlignJustify, Apple } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "~components/ui/button";
import { ROUTES } from "~constants/appRoutes";

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
            <Apple className="text-red-500"></Apple>
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
