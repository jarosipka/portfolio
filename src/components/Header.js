import { useState, useEffect } from "react";
import profileImg from "../img/profile-img.jpg";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={isMobileNavOpen ? "show" : ""}>
      <i
        className={`bi mobile-nav-toggle d-xl-none ${
          isMobileNavOpen ? "bi-x" : "bi-list"
        }`}
        onClick={handleMobileNavToggle}
      ></i>

      <div className="d-flex flex-column">
        <LanguageSwitch
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
        <div className="profile">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">{t("header.name")}</h1>
          <div className="social-links mt-3 text-center">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jaro-sipka/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        {/* The navigation menu with links to different sections of the page */}
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a
                href="#hero"
                className={`nav-link scrollto ${
                  activeSection === "hero" ? "active" : ""
                }`}
              >
                <i className="bx bx-home"></i> <span>{t("header.home")}</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link scrollto ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                <i className="bx bx-user"></i> <span>{t("header.about")}</span>
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`nav-link scrollto ${
                  activeSection === "resume" ? "active" : ""
                }`}
              >
                <i className="bx bx-file-blank"></i>{" "}
                <span>{t("header.resume")}</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`nav-link scrollto ${
                  activeSection === "portfolio" ? "active" : ""
                }`}
              >
                <i className="bx bx-book-content"></i>{" "}
                <span>{t("header.portfolio")}</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`nav-link scrollto ${
                  activeSection === "services" ? "active" : ""
                }`}
              >
                <i className="bx bx-server"></i>{" "}
                <span>{t("header.services")}</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link scrollto ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                <i className="bx bx-envelope"></i>{" "}
                <span>{t("header.contact")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
