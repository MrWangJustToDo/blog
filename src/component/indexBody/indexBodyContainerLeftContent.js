import React from "react";
import { Link } from "react-router-dom";
import IndexBodyContainerLeftContentLeft from "./indexBodyContainerLeftContentLeft";
import IndexBodyContainerLeftContentRight from "./indexBodyContainerLeftContentRight";

function IndexBodyContainerLeftContent(props) {
  return (
    <Link
      className="text-reset text-decoration-none card-body row d-flex align-items-center b-card-content-hover flex-wrap-reverse b-card-content-splitLine"
      to={`/blog/${props.rowid}`}
    >
      <IndexBodyContainerLeftContentLeft {...props} />
      <IndexBodyContainerLeftContentRight {...props} />
    </Link>
  );
}

export default IndexBodyContainerLeftContent;
