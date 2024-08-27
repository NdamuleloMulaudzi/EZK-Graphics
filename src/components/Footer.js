import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer class="footer">
        <div class="footer-branding">
          <h4>EZK Graphics</h4>
          <p>Transforming Ideas into Stunning Visual Realities</p>
        </div>

        <div class="footer-links">
          <a href="#about">About Us</a> |<a href="#services">Services</a> |{" "}
          <a href="#contact">Contact</a>
        </div>

        <div class="footer-social">
          <a href="https://www.linkedin.com/in/ezk-graphics-533ba8324 ">
            LinkedIn
          </a>
        </div>

        <div class="footer-copyright">
          <p>&copy; 2024 EZK Graphics. All Rights Reserved.</p>
        </div>

        <div class="footer-contact">
          <p>42 Meeide, Leen Sreet, Pretoria</p>
          <p>
            Email:{""}
            <a href="mailto:info@ezkgraphics.com">info@ezkgraphics.com</a>|
            Phone: +27-822-851-332
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
