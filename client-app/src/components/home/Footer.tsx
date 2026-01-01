import packageJson from "../../../package.json";
import WasoftIcon from "@/resources/icons/wasoft.svg?react";
import GitHubIcon from "@/resources/icons/github.svg?react";
import LinkedInIcon from "@/resources/icons/linkedin.svg?react";

const Footer = () => {
  return (
    <footer id="footer" className="relative w-full">
      <div className="container mx-auto px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <WasoftIcon className="hidden md:block self-center h-16 mr-12" />
            <a
              href="https://www.linkedin.com/in/pawe%C5%82-wawrzynek-6b3433100/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 flex items-center justify-center m-4"
            >
              <LinkedInIcon className="transition-transform duration-200 fill-medium-light hover:fill-primary hover:scale-125" />
            </a>
            <a
              href="https://github.com/wasoft-wawrzynek/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 flex items-center justify-center m-4"
            >
              <GitHubIcon className="transition-transform duration-200 fill-medium-light hover:fill-primary hover:scale-125" />
            </a>
            {/* <a
              href="https://www.wawrzelnia.pl/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 flex items-center justify-center m-4"
            >
              <WawrzelniaIcon className="transition-transform duration-200 stroke-medium-light hover:stroke-primary hover:scale-125" />
            </a> */}
          </div>
          <p className="text-medium-light text-center leading-6">
            v.{packageJson.version} | {new Date().getFullYear()} &copy;{' '}
            <a href="http://www.wasoft.pl">WaSoft</a> All rights reserved
          </p></div>
      </div>
    </footer>
  );
};

export default Footer;
