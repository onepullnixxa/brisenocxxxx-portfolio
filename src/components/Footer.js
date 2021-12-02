import React from "react";
import {
  FaCreativeCommons,
  FaGithub,
  FaLinkedin,
  FaSoundcloud,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul className="footer-nav"> 
        <li className="icon-links">
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            <FaCreativeCommons />
          </a>
        </li>
        <li className="icon-links">
          <a href="https://www.linkedin.com/in/christopherjonbriseno/">
            <FaLinkedin />
          </a>
        </li>
        <li className="icon-links">
          <a href="https://github.com/onepullnixxa">
            <FaGithub />
          </a>
        </li>
        <li className="icon-links">
          <a href="https://soundcloud.com/christopherbriseno">
            <FaSoundcloud />
          </a>
        </li>
        <li className="footer-text">
          <p>::christopher jon briseño:: 2022</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
