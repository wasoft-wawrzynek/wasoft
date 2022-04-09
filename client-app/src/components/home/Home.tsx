import { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { IntlProvider } from "react-intl";
import Particles from "react-tsparticles";
import { particlesConfig } from "../../resources/particlesConfig";
import messages, { hasLanguage } from "../../resources/translations";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Hobby from "./Hobby";
import Skills from "./Skills";

function Home() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

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
        <Particles params={particlesConfig} />
        <Header
          isHidden={onTop}
          language={locale}
          setLanguage={(lang) => navigate("/" + lang)}
        />
        <Waypoint
          onEnter={() => setOnTop(true)}
          onLeave={() => setOnTop(false)}
        ></Waypoint>
        <Hero />
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
