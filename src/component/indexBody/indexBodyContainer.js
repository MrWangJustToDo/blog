import React from "react";
import IndexBodyContainerLeft from "./indexBodyContainerLeft";
import IndexBodyContainerRight from "./indexBodyContainerRight";
import "./indexBodyContainer.css";

function IndexBodyContainer() {
  return (
    <div className="container-md pt-4 mb-4 animate__animated animate__fadeIn animate__faster">
      <div className="row d-flex justify-content-between px-lg-4 px-sm-2">
        <IndexBodyContainerLeft />
        <IndexBodyContainerRight />
      </div>
    </div>
  );
}

export default IndexBodyContainer;
