import React from "react";
import "./Hero.scss";
import { particlesConfig } from "../particlesjs-config";
import logo from "../icons/wasoft-light.svg";
import Particles from "react-tsparticles";

const Hero: React.FC = () => {
  return (
    <div id="header">
      <Particles params={particlesConfig} />
      <div className="header-content">
        <img src={logo} alt="logo" />
        <h3>Developer / Team Leader / Brewer</h3>
      </div>
    </div>
  );
};

export default Hero;
