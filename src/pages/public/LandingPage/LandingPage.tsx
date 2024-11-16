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
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                  Shadcn
                </span>{" "}
                landing page
              </h1>{" "}
              for{" "}
              <h2 className="inline">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  React
                </span>{" "}
                developers
              </h2>
            </main>

            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              Build your React landing page effortlessly with the required
              sections to your project.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-full md:w-1/3">Get Started</Button>
            </div>
          </div>

          {/* Hero cards sections */}
          <div className="z-10">
            <HeroCards />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
