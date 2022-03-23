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
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="projects">
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link to="audio">
              Audio
            </Link>
          </li>
          
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1L5cJV28eHRWzcV-sghYWEi0N9jEzYBDu/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
