import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import Link from "next/link";

import { ThemeContext } from "../public/context";

import { FaMoon, FaSun } from "react-icons/fa";

import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
  };

  return (
    <>
      <Fade top>
        <nav
          id="nav-bar"
          className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
        >
          <ul>
            <li>
              <Link aria-label="About Section" href="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link aria-label="Project Section" href="/projects">
                PROJECTS
              </Link>
            </li>

            <li
              className={
                isNight ? styles["night-toggle"] : styles["day-toggle"]
              }
              onClick={themeToggleHandler}
            >
              {isNight ? <FaMoon /> : <FaSun />}
            </li>
          </ul>
        </nav>
      </Fade>
    </>
  );
};

export default NavBar;
