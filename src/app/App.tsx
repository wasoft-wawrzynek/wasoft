import "./App.scss";
import { Fragment, useState } from "react";
import { Waypoint } from "react-waypoint";
import { IntlProvider } from "react-intl";
import Header from "./components/Header";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import translations from "./config/translations";

const App: React.FC = () => {
  const [locale, setLocale] = useState("pl");
  const [onTop, setOnTop] = useState(true);

  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <Fragment>
        <NavBar isHidden={onTop} language={locale} setLanguage={setLocale} />
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
