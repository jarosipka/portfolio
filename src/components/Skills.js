import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './css/style.css';
import { useTranslation } from 'react-i18next';

const Skill = ({ name, value, delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < value) {
        setProgress(progress + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress, value]);

  return (
    <div className="skill">
      <div className="progress" data-aos="fade-up" data-aos-delay={delay}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: '2rem',
            pathTransitionDuration: 1,
            pathColor: `rgba(62, 152, 199, ${progress / 100})`,
            textColor: '#050d18',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
};


const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{t('skills.sectionTitle')}</h2>
          <p>
          -
          </p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-3 col-md-6">
            <Skill name="HTML" value={80} delay={100} />
          </div>

          <div className="col-lg-3 col-md-6">
            <Skill name="CSS" value={60} delay={200} />
          </div>

          <div className="col-lg-3 col-md-6">
            <Skill name="JavaScript" value={40} delay={300} />
          </div>

          <div className="col-lg-3 col-md-6">
            <Skill name="React" value={50} delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
