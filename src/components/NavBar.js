import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="links">
        <a href=".home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#service">WHAT WE DO</a>

        <a href="#contact">CONTACT US</a>
      </div>
    </nav>
  );
}

export default Navbar;
