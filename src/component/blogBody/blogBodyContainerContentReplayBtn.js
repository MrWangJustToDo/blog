import React from "react";

function BlogBodyContainerContentReplayBtn(props) {
  return (
    <button
      type={props.btn ? "button" : "submit"}
      className={"btn btn-sm " + (props.className || "")}
      data-toggle="modal"
      data-target="#exampleModal"
      data-whatever="@mdo"
      onClick={props.forwardClick}
    >
      {props.title || "提交"}
    </button>
  );
}

export default BlogBodyContainerContentReplayBtn;
