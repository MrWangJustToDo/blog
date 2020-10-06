import React from "react";
import TypeBodyContainerHead from "./typeBodyContainerHead";
import TypeBodyContainerContent from "./typeBodyContainerContent";
import "./typeBodyContainer.css";

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
