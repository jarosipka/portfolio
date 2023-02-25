
import profileImg from "../img/profile-img.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
        <h2>{t('about.sectionTitle')}</h2>
        <p>{t('about.description')}</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={profileImg} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{t('header.name')}</h3>
            <p class="fst-italic">
              Frontend Developer
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>{t('about.birthday')}:</strong> <span>03 September 1989</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>{t('about.number')}:</strong> <span>+421 949 178 760</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>{t('about.address')}:</strong> <span>{t('about.city')}</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jaro.sipka@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p>
             -
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
