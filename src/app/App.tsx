import "./App.scss";
import { Fragment, useState } from "react";
import { Waypoint } from "react-waypoint";
import { IntlProvider } from "react-intl";
import Header from "./components/Header";
import NavBar from "./components/navbar/NavBar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import messages from "./config/translations";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Fragment>
        <NavBar isHidden={onTop} language={locale} setLanguage={setLocale} />
        <Waypoint
          onEnter={() => setOnTop(true)}
          onLeave={() => setOnTop(false)}
        ></Waypoint>
        <Header />
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
