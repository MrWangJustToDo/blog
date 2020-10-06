import React from "react";
import transformContent from "../tools/transformContent";
import IndexBodyContainerLeftContentLeftAuthor from "./indexBodyContainerLeftContentLeftAuthor";

function IndexBodyContainerLeftContentLeft(props) {
  return (
    <div className="col-lg-8">
      <h5 className="card-title font-weight-bold">{props.title}</h5>
      <p className="card-text b-card-content-overflow">
        {transformContent(props.content)}
      </p>
      <IndexBodyContainerLeftContentLeftAuthor {...props} />
    </div>
  );
}

export default IndexBodyContainerLeftContentLeft;
