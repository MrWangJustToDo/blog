import React from "react";
import TypeBodyContainerHead from "./typeBodyContainerHead";
import "./typeBodyContainer.css";
import TypeBodyContainerContent from "./typeBodyContainerContent";


function TypeBodyContainer() {
  return (
    <div className="mt-5 b-type-content animate__animated animate__fadeIn animate__faster">
      <div className="container">
        <TypeBodyContainerHead />
        <TypeBodyContainerContent />
      </div>
    </div>
  );
}

export default TypeBodyContainer;
