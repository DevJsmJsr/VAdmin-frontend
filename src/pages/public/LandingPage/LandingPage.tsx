import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeaderLanding from "./HeaderLanding/HeaderLanding";
import { Button } from "~components/ui/button";
import { HeroCards } from "~components/ui/herocards";
import landingVideo from "~assets/landing_video.mp4";

const LandingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <HeaderLanding />
      <div id="home">
        <section className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover video"
            src={landingVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-gray-200 text-[6rem] w-[835px] leading-[1] text-center font-bold mix-blend-difference">
              {t("labels.landing_hero_video")}
            </h1>
          </div>
        </section>
      </div>
      <div id="about">
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
          <div className="text-center lg:text-start space-y-6">
            <main className="text-5xl md:text-6xl font-bold">
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#f5b196]  to-[#d27f47] text-transparent bg-clip-text">
                  {t("labels.app_name")}
                </span>{" "}
                {t("labels.status_vehicle")}
              </h1>{" "}
              <h2 className="inline">
                <span className="inline bg-gradient-to-r from-[#6185fb] via-[#1fc0f1] to-[#033cd7] text-transparent bg-clip-text">
                  {t("labels.vehicle")}
                </span>{" "}
              </h2>
            </main>
            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              {t("labels.status_auto_repair")}
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-full md:w-1/3">
                {t("labels.get_started")}
              </Button>
            </div>
          </div>
          <div className="z-10">
            <HeroCards />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
