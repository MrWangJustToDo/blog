import React from "react";
import moment from "moment";
import "moment/locale/zh-cn";
import { useSelector } from "react-redux";
import headJpg from "../../image/head.jpg";

function IndexBodyContainerLeftContentLeftAuthor(props) {
  let { author } = useSelector((state) => state);
  return (
    <ul className="list-unstyled d-table b-index-content-author text-center">
      <li className="d-table-cell text-left">
        <div className="small text-decoration-none text-secondary">
          <img className="rounded-circle" src={headJpg} alt="头像" width="33" />
          <span className="ml-2 small">{author && author.username}</span>
        </div>
      </li>
      <li className="d-table-cell">
        <div className="small text-decoration-none text-secondary">
          <i className="fas fa-calendar small"></i>
          <span className="ml-2 small">{moment(props.created).calendar()}</span>
        </div>
      </li>
      <li className="d-table-cell">
        <div className="small text-decoration-none text-secondary">
          <i className="fas fa-eye small"></i>
          <span className="ml-2 small">{props.readcount}</span>
        </div>
      </li>
      <li className="d-table-cell">
        <span className="small badge badge-info">{props.type}</span>
      </li>
    </ul>
  );
}

export default IndexBodyContainerLeftContentLeftAuthor;
