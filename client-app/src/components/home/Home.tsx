import Header from "../header/Header";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Hobby from "./Hobby";
import Skills from "./Skills";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      {/* Add particles background here if needed */}
      <Header />
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
