import CountUp from 'react-countup';
import { GoMarkGithub } from "react-icons/go"; 
import { useTranslation } from 'react-i18next';

const Facts = () => {
  const { t } = useTranslation();
  return (
    <section id="facts" class="facts">
      <div class="container">
        <div class="section-title">
          <h2>{t('facts.sectionTitle')}</h2>
          <p>
          
          <a href="https://github.com/jarosipka/portfolio" target="_blank" rel="noopener noreferrer"> <GoMarkGithub className='githubIcon'/>{t('facts.url')}</a>
          

          </p>
        </div>

        <div class="row no-gutters">
          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <CountUp
              start={0}
              end={0}
              duration={10}
            />    
              <p>
                <strong>{t('facts.strong1')}</strong> consequuntur quae
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="count-box">
              <i class="bi bi-journal-richtext"></i>
              <CountUp
              start={0}
              end={0}
              duration={10}
            />    
              <p>
                <strong>{t('facts.strong2')}</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <CountUp
              start={0}
              end={0}
              duration={5}
            />    
              <p>
                <strong>{t('facts.strong3')}</strong> aut commodi quaerat
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="count-box">
              <i class="bi bi-people"></i>
              <CountUp
              start={0}
              end={0}
              duration={10}
            />    
              <p>
                <strong>{t('facts.strong4')}</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
