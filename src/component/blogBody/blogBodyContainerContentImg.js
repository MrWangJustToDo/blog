import React from "react";
import flushBlogItem from "../tools/flushBlogItem";

function BlogBodyContainerContentImg() {
  let { link } = flushBlogItem();
  return (
    <li className="list-group-item">
      <div className="card-body">
        <img className="rounded" src={link} alt="图片" width="100%" />
      </div>
    </li>
  );
}

export default BlogBodyContainerContentImg;
