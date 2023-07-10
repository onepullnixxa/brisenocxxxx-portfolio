import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  
  
  return (
    <header>
      <div className="header-me__8-D">
        <NavLink to="/">
          <h1 className="home">Christopher Briseño</h1>
        </NavLink>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="projects">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="audio">
              Audio
            </NavLink>
          </li>
          
          <li>
            <a href="https://drive.google.com/file/d/1anqD-km4lXOnrdrGaptmN-KoIA6RlUO-/preview">
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
