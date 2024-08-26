import React from "react";
import founder from "../assets/founder-pic.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div class="about-content">
        <div class="headings">
          <h3 className="who-we-are">Who we are</h3>
          <h1>ABOUT US</h1>
        </div>
        <div class="mission">
          <p>
            At <span>EZK Graphics</span>, our mission is to bring imagination to
            life with exceptional CAD graphic solutions. We are dedicated to
            transforming innovative ideas into precise and captivating visual
            representations, specializing in both 2D and 3D design. Through our
            commitment to creativity, technical excellence, and customer
            satisfaction, we aim to empower our clients to visualize their
            projects and dreams with clarity and detail, pushing the boundaries
            of what's possible in design.
          </p>
        </div>
        <div className="sub-content">
          <h4 className="sub-heading">But we don't just create design</h4>
          <p className="sub-text">
            We build future-ready graphics that set new benchmarks in creativity
            and precision. Our focus is on crafting designs that not only look
            great but also serve a purpose, making sure every piece we create
            aligns with your brand and goals. Our talented desiner is skilled in
            both the technical and creative aspects of design, ensuring that our
            work is both innovative and impactful.
          </p>
        </div>
        <div className="sub-content">
          <h4 className="sub-heading">
            Practical Solutions for Real-World Impact
          </h4>
          <p className="sub-text">
            We immerse ourselves in understanding our clients' needs, applying
            practical and real-world approaches to our designs. This ensures
            that the solutions we provide give our clients a competitive edge,
            whether they are in architectural planning, product development, or
            any other field that requires high-quality graphic solutions.
          </p>
        </div>
        <div className="sub-content">
          <h4 className="sub-heading">A Commitment to Excellence</h4>
          <p className="sub-text">
            At EZK Graphics, we are committed to not only meeting but exceeding
            client expectations. Our dedication to excellence drives us to
            continually innovate and improve, ensuring that every project we
            undertake opens doors to new possibilities and success for our
            clients.
          </p>
        </div>
        <div className="sub-content">
          <h4 className="sub-heading">A New Chapter</h4>
          <p className="sub-text">
            As we continue to grow and evolve, we remain focused on our mission
            to shape the future of graphic design. By consistently aligning our
            services with the latest industry trends and technologies, we ensure
            that EZK Graphics stays at the forefront of design innovation. Join
            us as we turn your creative visions into reality with precision,
            passion, and purpose.
          </p>
        </div>
        <div className="designer">
          <h2>Meet our Designer</h2>

          <img src={founder} alt="Our Designer" />
          <p className="designer-name">Chantel Sam</p>
        </div>
      </div>
    </div>
  );
}

export default About;
