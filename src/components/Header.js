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
            <p id="projects">Projects</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
