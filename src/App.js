import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

import "../src/components/css/style.css";
import "../src/components/vendor/aos/aos.css";
import "../src/components/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/components/vendor/boxicons/css/boxicons.min.css";
import "../src/components/vendor/glightbox/css/glightbox.min.css";
import "../src/components/vendor/swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Hero />
      <Header />

      <main id="main">
        <AboutMe />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default App;
