import React from "react";
import { Link } from "react-router-dom";

function ArchiveBodyContainerBody(props) {
  return (
    <>
      <h3 className="text-center display-5 my-3">{props.title}</h3>
      <ul className="list-group user-select-none mb-5">
        {props.list.map((it) => (
          <Link
            key={it.rowid}
            to={`/blog/${it.rowid}`}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <div>
              <i className="fa fa-circle b-list-item-circle-mini align-middle text-info pr-1"></i>
              <span>{it.title}</span>
              <span className="b-list-item-label-mini align-middle border rounded border-info text-info px-2 ml-2">
                {it.moment}
              </span>
            </div>
            <span className="b-list-item-label-mini border rounded border-danger text-danger px-2">
              {it.flag}
            </span>
          </Link>
        ))}
      </ul>
    </>
  );
}
export default ArchiveBodyContainerBody;
