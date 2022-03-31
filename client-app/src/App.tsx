import "./App.scss";
import { Fragment, useState } from "react";
import { Waypoint } from "react-waypoint";
import { IntlProvider } from "react-intl";
import Particles from "react-tsparticles";
import messages from "./lang/translations";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Experience from "./components/home/Experience";
import Education from "./components/home/Education";
import Hobby from "./components/home/Hobby";
import Contact from "./components/home/Contact";
import { particlesConfig } from "./resources/particlesConfig";

const App: React.FC = () => {
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Fragment>
        <Particles params={particlesConfig} />
        <Header isHidden={onTop} language={locale} setLanguage={setLocale} />
        <Waypoint
          onEnter={() => setOnTop(true)}
          onLeave={() => setOnTop(false)}
        ></Waypoint>
        <Hero />
        <Experience />
        <Education />
        <Hobby />
        <Contact />
        <Footer />
      </Fragment>
    </IntlProvider>
  );
};

export default App;
