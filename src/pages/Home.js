import React from "react";
import logo from "../assets/logo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1 className="header">EZK Graphics</h1>
        <h3>
          Good designs come with <i>practice</i>; Great designs come from the
          <em> soul.</em>
        </h3>

        <p className="welcome-Message">
          Welcome to EZK graphics, where creativity meets precision. We
          specializing in CAD graphics, we transform ideas into stunning visual
          realities through our expertise in both 2D and 3D design.Whether
          you're dreaming up a groundbreaking architectural marvel or crafting
          intricate product details, we bring your visions to life with
          unparalleled accuracy and artistry. At EZK Graphics, we don’t just
          create designs—we craft experiences that captivate and inspire!
        </p>

        <button className="contact-btn">Let's Connect</button>
      </div>
      <img src={logo} className="home-logo" />
    </div>
  );
}

export default Home;
