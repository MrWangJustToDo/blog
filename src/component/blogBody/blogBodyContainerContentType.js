import React from "react";
import flushBlogItem from "../tools/flushBlogItem";

function BlogBodyContainerContentType() {
  let { type, flag } = flushBlogItem();
  return (
    <li className="list-group-item border-0">
      <div className="m-2 d-flex align-items-center justify-content-between">
        <p className="m-0">
          分类 &gt;
          <span className="text-info pl-2">{type}</span>
        </p>
        <span className="badge badge-info">{flag}</span>
      </div>
    </li>
  );
}

export default BlogBodyContainerContentType;
