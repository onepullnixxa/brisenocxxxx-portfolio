import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <h4 id="home">Christopher Briseño</h4>
        </Link>
      </header>
      <nav>
        <ul className="navbar">
          <li className="nav-item">
            <Link to="about">
              <p id="about">About</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="projects">
              <p id="projects">Projects</p>
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1YKK0SBFUFTh7VFVODUIAFiL5wqoJeURi/view">
              <p id="resume">Resume</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
