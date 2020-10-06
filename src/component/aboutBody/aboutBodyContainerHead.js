import React from "react";
import aboutJpg from "../../image/about.jpg";

function AboutBodyContainerHead() {
  return (
    <div className="col-md-8">
      <img
        className="border rounded"
        src={aboutJpg}
        alt="关于我"
        width="100%"
      />
    </div>
  );
}

export default AboutBodyContainerHead;
