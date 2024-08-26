import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/NavBar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/service">WHAT WE DO</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}

export default Navbar;
