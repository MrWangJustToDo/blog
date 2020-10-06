import React from "react";
import AboutBodyContainerHead from "./aboutBodyContainerHead";
import AboutBodyContainerBody from "./aboutBodyContainerBody";
import "./aboutBodyContainer.css";

function AboutBodyContainer() {
  return (
    <div className="my-5 animate__animated animate__fadeIn animate__faster">
      <div className="container">
        <div className="mx-4 row">
          <AboutBodyContainerHead />
          <AboutBodyContainerBody />
        </div>
      </div>
    </div>
  );
}

export default AboutBodyContainer;
