import React from "react";
import AboutBodyContainerAbout from "./aboutBodyContainerAbout";
import AboutBodyContainerTags from "./aboutBodyContainerTags";
import AboutBodyContainerType from "./aboutBodyContainerType";
import AboutBodyContainerLink from "./aboutBodyContainerLink";

function AboutBodyContainerBody() {
  return (
    <div className="col-md-4 mt-4 mt-md-0">
      <div className="card">
        <div className="card-header user-select-none">
          <span>关于我</span>
        </div>
        <ul className="list-group list-group-flush">
          <AboutBodyContainerAbout />
          <AboutBodyContainerTags />
          <AboutBodyContainerType />
          <AboutBodyContainerLink />
        </ul>
      </div>
    </div>
  );
}

export default AboutBodyContainerBody;
