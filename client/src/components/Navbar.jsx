import "./Nav.css";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState(0);
  const [animate, setAnimate] = useState(false);

  const toggleTheme = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
    setTheme(theme === 0 ? 1 : 0);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <h1 className="nav-title">Weather App</h1>
      </div>

      <div
        className={`theme-toggle ${animate ? "animating" : ""}`}
        onClick={toggleTheme}
      >
        {theme === 0 ? (
          <FontAwesomeIcon icon={faSun} className="theme-icon" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="theme-icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
