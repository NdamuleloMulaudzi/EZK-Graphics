import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import reoder from "../assets/reorder.svg";
import "../styles/NavBar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#service">WHAT WE DO</a>

        <a href="#contact">CONTACT US</a>
      </div>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar(!expandNavbar);
          }}
        >
          <img src={reoder} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
