import React from "react";
import headJpg from "../../image/head.jpg";
import { useSelector } from "react-redux";

function TypeBodyContainerContentLeftAuthor(props) {
  let { author } = useSelector((state) => state);
  return (
    <ul className="list-unstyled d-table  b-index-content-author text-center">
      <li className="d-table-cell text-left">
        <p className="small text-decoration-none text-secondary">
          <img className="rounded-circle" src={headJpg} alt="头像" width="33" />
          <span className="ml-2 c-author">{author && author.username}</span>
        </p>
      </li>
      <li className="d-table-cell">
        <p className="small text-decoration-none text-secondary">
          <i className="fa fa-calendar"></i>
          <span className="ml-2 c-edit-time">{props.moment}</span>
        </p>
      </li>
      <li className="d-table-cell">
        <p className="small text-decoration-none text-secondary">
          <i className="fa fa-eye"></i>
          <span className="ml-2 c-read-times">{props.readcount}</span>
        </p>
      </li>
      <li className="d-table-cell">
        <p className="small badge badge-info">{props.type}</p>
      </li>
    </ul>
  );
}

export default TypeBodyContainerContentLeftAuthor;
