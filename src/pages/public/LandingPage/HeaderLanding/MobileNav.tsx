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
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNav = () => {
  const { t } = useTranslation();
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
            <Link to={"/home"}>{t("labels.home")}</Link>
            <Link to={"/about"}>{t("labels.about")}</Link>
            <Link to={"/team"}>{t("labels.team")}</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
