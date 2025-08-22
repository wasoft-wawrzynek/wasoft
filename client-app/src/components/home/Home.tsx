import { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages, { hasLanguage } from "../../resources/translations";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Hobby from "./Hobby";
import Skills from "./Skills";

const Home = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (lang && hasLanguage(lang)) {
      setLocale(lang);
    }
  }, [lang]);

  if (lang && !hasLanguage(lang)) {
    return <Navigate to="/" />;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Fragment>
        {/* Add particles background here if needed */}
        <Header
          isHidden={onTop}
          language={locale}
          setLanguage={(lang) => navigate("/" + lang)}
        />
        <div>
          <Hero />
        </div>
        <Experience />
        <Skills />
        <Education />
        <Hobby />
        <Contact />
        <Footer />
      </Fragment>
    </IntlProvider>
  );
}

export default Home;
