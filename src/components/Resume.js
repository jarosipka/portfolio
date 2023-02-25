import React from 'react'
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>{t('resume.sectionTitle')}</h2>
          <p>{t('resume.sectionDescription')}</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">{t('resume.sumary')}</h3>
            <div class="resume-item pb-0">
              <h4>{t('header.name')}</h4>
              <p><em>{t('resume.description')}</em></p>
              <ul>
                <li>{t('resume.myAddress')}</li>
                <li>+421 949 178 760</li>
                <li>jaro.sipka@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">{t('resume.education')}</h3>
            <div class="resume-item">
              <h4>Front-End Development -
              IT v kurze</h4>
              <h5>09/2022 - 02/2023</h5>
              <p><em>{t('resume.locationEducation1')}</em></p>
              <p>{t('resume.aboutEducation')}</p>
            </div>
            <div class="resume-item">
              <h4>{t('resume.school')}</h4>
              <h5>09/2005 - 05/2009</h5>
              <p><em>{t('resume.locationEducation2')}</em></p>
              <p>{t('resume.aboutSchool')}</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">{t('resume.experience')}</h3>
            <div class="resume-item">
              <h4>{t('resume.job1')}</h4>
              <h5>09/2021 - {t('resume.present')}</h5>
              <p><em>{t('resume.locationEducation1')}</em></p>
              <ul>
                <li>{t('resume.aboutJob1')}</li>
                <li>{t('resume.aboutJob2')}</li>
                
              </ul>
            </div>
            <div class="resume-item">
              <h4>{t('resume.work')}</h4>
              <h5>01/2019 - 08/2021</h5>
              <p><em>{t('resume.locationWork')}</em></p>
              <ul>
                <li>{t('resume.aboutWork')}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume