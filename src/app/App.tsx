import Header from "./components/Header";
import "./App.scss";
import { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import { Waypoint } from "react-waypoint";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { IntlProvider } from "react-intl";
import translations from "./translations";

const App: React.FC = () => {
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <Fragment>
        <NavBar
          className={`fixed ${onTop ? "hidden" : ""}`}
          language={locale}
          setLanguage={setLocale}
        />
        <Waypoint
          onEnter={() => setOnTop(true)}
          onLeave={() => setOnTop(false)}
        ></Waypoint>
        <Header />
        <Skills />
        <Experience />
        <Education />
      </Fragment>
    </IntlProvider>
  );
};

export default App;
