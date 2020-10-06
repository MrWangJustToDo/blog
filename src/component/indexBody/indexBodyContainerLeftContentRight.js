import React from "react";

function IndexBodyContainerLeftContentRight(props) {
  return (
    <div className="col-lg-4 mb-4 my-lg-0">
      <img
        className="rounded"
        src={props.link}
        alt="图片"
        width="100%"
        style={{ maxWidth: "700px" }}
      />
    </div>
  );
}

export default IndexBodyContainerLeftContentRight;
