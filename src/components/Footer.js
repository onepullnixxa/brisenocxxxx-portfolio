import React from "react";
import {
  FaCreativeCommons,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import RelativaLogo from "../images/relativa-icon.png";

function Footer() {
  return (
    <footer>
      <ul className="footer-nav"> 
        <li className="icon-links">
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer">
            <FaCreativeCommons />
          </a>
        </li>
        <li className="icon-links">
          <a href="https://www.linkedin.com/in/christopherjonbriseno/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className="icon-links">
          <a href="https://github.com/onepullnixxa" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className="icon-links">
          <a href="mailto:briseno.chris@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li className="icon-links" id="relativa-logo">
          <a href="https://radiorelativa.eu/show/dreamcast/" target="_blank" rel="noreferrer">
            <img src={RelativaLogo} height={28} alt="small icon" />
          </a>
        </li>
        <li className="footer-text">
          <p>::christopher jon briseño:: 2023</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
