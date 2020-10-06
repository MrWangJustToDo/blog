import React from "react";
import IndexBodyContainerRightTypes from "./indexBodyContainerRightTypes";
import IndexBodyContainerRightCommend from "./indexBodyContainerRightCommend";
import IndexBodyContainerRightLink from "./indexBodyContainerRightLink";

function IndexBodyContainerRight() {
  return (
    <div className="col-md-4">
      <IndexBodyContainerRightTypes />
      <IndexBodyContainerRightCommend />
      <IndexBodyContainerRightLink />
    </div>
  );
}

export default IndexBodyContainerRight;
