import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Hobby from "./Hobby";
import Skills from "./Skills";
import Footer from "../Footer";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      {/* Add particles background here if needed */}
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Hobby />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
