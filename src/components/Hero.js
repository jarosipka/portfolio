import React, { useEffect } from "react";
import Typed from "typed.js";
import HeroVideo from "../img/hero-bg.mp4";
import HeroImage from "../img/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const strings = [t("hero.developer")];

    const typed = new Typed(".typed", {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section id="hero">
      <div class="hero-container" data-aos="fade-in">
        <h1>{t("header.name")}</h1>
        <p>
          <span class="typed"></span>
        </p>
      </div>

      <div className="hero">
        <video autoPlay loop muted playsInline poster={HeroImage}>
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
