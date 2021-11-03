import Header from "./components/Header";
import "./App.scss";
import { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import { Waypoint } from "react-waypoint";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App: React.FC = () => {
  const [onTop, setOnTop] = useState(true);

  return (
    <Fragment>
      <NavBar className={`fixed ${onTop ? "hidden" : ""}`} />
      <Waypoint
        onEnter={() => setOnTop(true)}
        onLeave={() => setOnTop(false)}
      ></Waypoint>
      <Header />
      <Skills />
      <Experience />
      <Education />
    </Fragment>
  );
};

export default App;
