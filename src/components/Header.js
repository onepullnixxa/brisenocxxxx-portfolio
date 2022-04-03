import React from "react";
import { Link } from "react-router-dom";

function Header() {
  
  
  return (
    <header>
      <div class="header-me__8-D">
        <Link to="/">
          <h1 id="home">Christopher Briseño</h1>
        </Link>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="about">
              About
            </Link>
          </li>

          <li>
            <Link to="projects">
              Projects
            </Link>
          </li>

          <li>
            <Link to="audio">
              Audio
            </Link>
          </li>
          
          <li>
            <a href="https://drive.google.com/file/d/1L5cJV28eHRWzcV-sghYWEi0N9jEzYBDu/view?usp=sharing">
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
