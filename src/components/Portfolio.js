import React, { useEffect } from "react";
import Glightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Isotope from "isotope-layout";
import portfolioImages from "../data/portfolioImages";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  useEffect(() => {
   Glightbox({
      selector: ".portfolio-lightbox",
      loop: true,
    });

    let portfolioContainer = document.querySelector(".portfolio-container");
    let isotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    let filters = document.querySelectorAll("#portfolio-flters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        let filterValue = this.getAttribute("data-filter");
        isotope.arrange({ filter: filterValue });
        document
          .querySelector(".filter-active")
          .classList.remove("filter-active");
        this.classList.add("filter-active");
      });
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{t('portfolio.sectionTitle')}</h2>
          <p>
          {t('portfolio.sectionDescription')}
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolioImages.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
            >
              <div className="portfolio-wrap">
                <img src={item.image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href={item.image}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="#">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
