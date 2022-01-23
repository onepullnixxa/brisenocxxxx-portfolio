import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 id="home">Christopher Briseño</h1>
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
            <Link to="audio">
              <p id="audio">Audio</p>
            </Link>
          </li>
          
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1L5cJV28eHRWzcV-sghYWEi0N9jEzYBDu/view?usp=sharing">
              <p id="resume">Resume</p>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
