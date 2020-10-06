import React from "react";
import { Link, useLocation } from "react-router-dom";

function HeadContainerLi(props) {
  let location = useLocation();
  return (
    <li
      className={
        "nav-item px-lg-3 my-1 my-lg-0 b-nav-hover " +
        (location.pathname === props.to ? "active" : "")
      }
    >
      <Link className="nav-link" to={props.to}>
        <i className={"fas b-nav-icon-font fa-" + props.className}></i>
        {props.content}
      </Link>
    </li>
  );
}

export default HeadContainerLi;
