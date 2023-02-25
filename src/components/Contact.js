import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t('contact.sectionTitle')}</h2>
          <p>
          {t('contact.sectionDescription')}
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4> {t('contact.locationTitle')}</h4>
                <p>{t('contact.location')}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>jaro.sipka@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>{t('contact.number')}</h4>
                <p>+421 949 178 760</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20916.887726496483!2d19.900409999999997!3d49.05602020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssk!2ssk!4v1676717627642!5m2!1ssk!2ssk" frameBorder="0" style={{ border: 0, width: "100%", height: "290px" }} allowFullScreen ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="https://formspree.io/f/xayzonaa" method="POST" role="form" className="email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder={t('contact.form.name')}
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="_replyto"
                    id="email"
                    placeholder={t('contact.form.email')}
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder={t('contact.form.subject')}
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder={t('contact.form.message')}
                ></textarea>
                <div className="validation"></div>
              </div>
              <div className="text-center">
                <button type="submit">{t('contact.form.sendMessage')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
