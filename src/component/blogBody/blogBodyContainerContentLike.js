import React from "react";
import flushBlogItem from "../tools/flushBlogItem";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import BlogBodyContainerContentLikeBody from "./blogBodyContainerContentLikeBody";

// 打赏页面
function BlogBodyContainerContentLike() {
  let { award } = flushBlogItem();
  return (
    <ComponentLoadAndRender
      judge={() => award}
      map={() => <BlogBodyContainerContentLikeBody />}
      nothing={() => (
        <li className="list-group-item">
          <div className="my-2 my-lg-4 text-center">
            文章质量不高,打赏功能关闭
          </div>
        </li>
      )}
    />
  );
}

export default BlogBodyContainerContentLike;
