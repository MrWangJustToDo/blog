import React from "react";
import { Link } from "react-router-dom";
import TypeBodyContainerContentListLeft from "./typeBodyContainerContentListLeft";
import TypeBodyContainerContentListRight from "./typeBodyContainerContentListRight";

function TypeBodyContainerContentLeft(props) {
  return (
    <Link
      className="text-reset text-decoration-none list-group-item"
      to={`/blog/${props.rowid}`}
    >
      <div className="row d-flex align-items-center flex-wrap-reverse b-card-content-hover">
        <TypeBodyContainerContentListLeft {...props} />
        <TypeBodyContainerContentListRight {...props} />
      </div>
    </Link>
  );
}

export default TypeBodyContainerContentLeft;
