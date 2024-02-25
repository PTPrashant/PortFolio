// import React from 'react'300<Link
import { Link } from "react-scroll";
import "./CSS.css";

function NavCustom() {
  return (
    <div className="nav-style">
      <nav className="navbar nav-item navbar-expand-lg ">
        <a
          className="navbar-brand nav-item-main "
          style={{ color: "white" }}
          href="#"
        >
          <h2>PT</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor: 'grey'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="nav-items navbar-nav">
            <Link
              to="career"
              smooth={true}
              spy={true}
              duration={700}
              className="nav-item nav-link nav-items active"
              href="#"
            >
              Career
            </Link>
            <Link
              to="aboutMe"
              smooth={true}
              spy={true}
              duration={700}
              className="nav-item nav-link nav-items active"
              href="#"
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              duration={700}
              className="nav-item nav-link nav-items active"
              href="#"
            >
              Personal Projects
            </Link>
            <Link
              to="contactMe"
              smooth={true}
              spy={true}
              duration={700}
              className="nav-item nav-link nav-items active"
              href="#"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavCustom;
