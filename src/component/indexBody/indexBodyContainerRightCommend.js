import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function IndexBodyContainerRightCommend() {
  let { index } = useSelector((state) => state);
  return (
    <div className="card mt-4">
      <div className="card-header small b-card-header-border">
        <span>
          <i className="fas fa-bookmark mr-2"></i> 最新推荐
        </span>
      </div>
      <div className="list-group list-group-flush">
        <ComponentLoadAndRender
          judge={() => index.filter((it) => it.commend).length}
          map={() =>
            index
              .filter((it) => it.commend)
              .slice(0, 4)
              .map((it, idx) => (
                <Link
                  key={idx}
                  to={`/blog/${it.rowid}`}
                  className="list-group-item list-group-item-action small"
                >
                  {it.title}
                </Link>
              ))
          }
          nothing={() => (
            <div className="list-group-item list-group-item-action small">
              没有最新推荐文章
            </div>
          )}
          delay={1000}
        />
      </div>
    </div>
  );
}

export default IndexBodyContainerRightCommend;
