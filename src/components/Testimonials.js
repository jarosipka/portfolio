import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/pagination/pagination.min.css";
import { useTranslation } from 'react-i18next';

import Testimonials1 from "../img/testimonials/testimonials-1.jpg";
import Testimonials2 from "../img/testimonials/testimonials-2.jpg";
import Testimonials3 from "../img/testimonials/testimonials-3.jpg";
import Testimonials4 from "../img/testimonials/testimonials-4.jpg";
import Testimonials5 from "../img/testimonials/testimonials-5.jpg";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

const Testimonials = () => {
  const { t } = useTranslation();
  SwiperCore.use([Autoplay, Pagination]);

  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{t('testimonials.sectionTitle')}</h2>
          <p>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
          </p>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={slidesToShow}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonials1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonials2} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
                <img src={Testimonials3} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonials4} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonials5} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
