import React from "react";
import BlogBodyContainerHeadAuthor from "./blogBodyContainerHeadAuthor";
import BlogBodyContainerHeadBack from "./blogBodyContainerHeadBack";

function BlogBodyContainerHead() {
  return (
    <h6 className="card-header bg-transparent d-flex justify-content-between align-items-center">
      <BlogBodyContainerHeadAuthor />
      <BlogBodyContainerHeadBack />
    </h6>
  );
}

export default BlogBodyContainerHead;
