import React, { useEffect, useState } from "react";
import transformContent from "../tools/transformContent";
import IndexBodyContainerLeftContentLeftAuthor from "./indexBodyContainerLeftContentLeftAuthor";

function IndexBodyContainerLeftContentLeft(props) {
  let [state, setState] = useState("loading...");
  useEffect(() => {
    setState(transformContent(props.content));
  }, [props]);
  return (
    <div className="col-lg-8">
      <h5 className="card-title font-weight-bold">{props.title}</h5>
      <p className="card-text b-card-content-overflow">{state}</p>
      <IndexBodyContainerLeftContentLeftAuthor {...props} />
    </div>
  );
}

export default IndexBodyContainerLeftContentLeft;
