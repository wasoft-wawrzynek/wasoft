import React from "react";
import { particlesConfig } from "../particlesjs-config";
import logo from "../icons/wasoft-light.svg";
import Particles from "react-tsparticles";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div id="header">
      <Particles style={{ position: "unset" }} params={particlesConfig} />
      <div className="header-content">
        <img src={logo} alt="logo" />
        <h3>Developer / Team Leader / Brewer</h3>
      </div>
    </div>
  );
};

export default Header;
