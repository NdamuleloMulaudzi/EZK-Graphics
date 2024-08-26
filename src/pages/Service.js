import React from "react";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";

import "../styles/Service.css";

function Service() {
  return (
    <div className="service">
      <h2>What we do</h2>
      <h1>OUR SERVICES INCLUDES</h1>
      <div className="container">
        <div className="card card1">
          <h2>2D and 3D Graphics Design:</h2>
          <p>
            Our 2D graphics design services encompass a wide range of creative
            outputs.We work closely with clients to develop designs that
            effectively communicate their brand's message and engage their
            target audience
          </p>
          <img src={service2} alt="" width={200} height={230} />
        </div>
        <div className="card card2">
          <h2>SolidWorks Projects:</h2>
          <p>
            Our proficiency in SolidWorks allows us to produce sophisticated and
            precise designs for various applications, ensuring your projects are
            both innovative and technically sound
          </p>

          <img src={service4} alt="" width={200} />
        </div>
        <div className="card card3">
          <h2>Isometric and Orthographic Views:</h2>
          <p>
            We excel in creating isometric and orthographic projections that
            provide a clear, multi-dimensional perspective of your projects,
            enhancing both functionality and aesthetics.
          </p>
          <img src={service1} alt="" height={220} />
        </div>
      </div>
    </div>
  );
}

export default Service;
