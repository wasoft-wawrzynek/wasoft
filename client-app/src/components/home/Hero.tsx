import { Trans, useTranslation } from "react-i18next";
import Typed from "../controls/Typed";
import WasoftIcon from "@/resources/icons/wasoft-light-full.svg?react";
import AnimatedDots from "../controls/AnimatedDots";

const Hero = () => {
  const { t } = useTranslation();

  const words = [
    t("hero.developer"),
    t("hero.team-leader"),
    t("hero.brewer"),
  ];

  return (
    <AnimatedDots>
      <div id="hero" className="relative flex flex-col items-center justify-center h-[100vh] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-[5em] w-full px-4 md:px-8">
          {/* Logo Content */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative mx-auto aspect-square w-[min(70vw,50vh)] max-w-[400px] max-h-[400px]">
              {/* Profile bubble */}
              <div className="rounded-full bg-dark border-4 border-primary overflow-hidden w-full h-full flex items-center justify-center">
                <img
                  src="/img/profile.png"
                  alt="logo"
                />
              </div>
              {/* Wasoft bubble */}
              <div className="absolute w-1/2 h-1/2 p-[5%] bottom-[-15%] right-[-15%] rounded-full bg-dark border-4 border-primary flex items-center justify-center">
                <WasoftIcon />
              </div>
            </div>
          </div>
          {/* Info Content */}
          <div className="flex flex-col text-center justify-center mx-0 md:mx-12 max-w-full min-w-[270px]">
            <h3 className="mt-6 leading-[2.5rem]">
              <Trans i18nKey="hero.introduction-start" />
              <span className="text-primary">Paweł</span>
              <Trans i18nKey="hero.introduction-end" />
            </h3>
            <h2 className="mt-4 font-bold text-primary">
              <Typed
                strings={words}
                typeSpeed={40}
                backSpeed={20}
                backDelay={2000}
                cursorChar="_"
                loop
              />
            </h2>
          </div>
        </div>
      </div >
    </AnimatedDots>
  );
};

export default Hero;
