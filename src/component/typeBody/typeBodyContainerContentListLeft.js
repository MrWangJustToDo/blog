import React from "react";
import transformContent from "../tools/transformContent";
import TypeBodyContainerContentListLeftAuthor from "./typeBodyContainerContentListLeftAuthor";

function TypeBodyContainerContentLeft(props) {
  return (
    <div className="col-lg-8">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text b-card-content-three-line">
        {transformContent(props.content)}
      </p>
      <TypeBodyContainerContentListLeftAuthor {...props} />
    </div>
  );
}

export default TypeBodyContainerContentLeft;
