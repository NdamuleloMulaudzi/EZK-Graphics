import React from "react";
import picture from "../assets/service-5.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="form-container">
        <h1>LET'S CONNECT!</h1>
        <form action="info@ezkgraphics.co.za" id="form">
          <div class="input">
            <label for="firstname">FIRST NAME</label>
            <input type="text" name="firstname" id="firstname" required />
          </div>
          <div class="input">
            <label for="lastname">LAST NAME</label>
            <input type="text" name="lastname" id="lastname" required />
          </div>
          <div class="input">
            <label for="email">EMAIL</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="input">
            <label for="phone-number">PHONE NUMBER</label>
            <input type="number" name="phone-number" id="phone-number" />
          </div>
          <textarea placeholder="Enter your message" rows={5} />
        </form>
        <button id="form-btn" type="submit" form="form" value="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
