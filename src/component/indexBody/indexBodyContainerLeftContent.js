import React from "react";
import { Link } from "react-router-dom";
import { AsyncComponent } from "../tools/importComponent";
const IndexBodyContainerLeftContentLeft = AsyncComponent(() =>
  import("./indexBodyContainerLeftContentLeft")
);
const IndexBodyContainerLeftContentRight = AsyncComponent(() =>
  import("./indexBodyContainerLeftContentRight")
);

function IndexBodyContainerLeftContent(props) {
  return (
    <Link
      to={`/blog/${props.rowid}`}
      className="text-reset text-decoration-none card-body row d-flex align-items-center justify-content-around b-card-content-hover flex-wrap-reverse b-card-content-splitLine"
    >
      <IndexBodyContainerLeftContentLeft {...props} />
      <IndexBodyContainerLeftContentRight {...props} />
    </Link>
  );
}

export default IndexBodyContainerLeftContent;
