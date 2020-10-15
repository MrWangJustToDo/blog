import React from "react";
import { AsyncComponent } from "../tools/importComponent";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
// import BlogBodyContainerContentImg from "./blogBodyContainerContentImg";
// import BlogBodyContainerContentType from "./blogBodyContainerContentType";
// import BlogBodyContainerContentBody from "./blogBodyContainerContentBody";
// import BlogBodyContainerContentLike from "./blogBodyContainerContentLike";
// import BlogBodyContainerContentMessage from "./blogBodyContainerContentMessage";
import flushBlogItem from "../tools/flushBlogItem";
const BlogBodyContainerContentImg = AsyncComponent(() =>
  import("./blogBodyContainerContentImg")
);
const BlogBodyContainerContentType = AsyncComponent(() =>
  import("./blogBodyContainerContentType")
);
const BlogBodyContainerContentBody = AsyncComponent(() =>
  import("./blogBodyContainerContentBody")
);
const BlogBodyContainerContentLike = AsyncComponent(() =>
  import("./blogBodyContainerContentLike")
);
const BlogBodyContainerContentMessage = AsyncComponent(() =>
  import("./blogBodyContainerContentMessage")
);

function BlogBodyContainerContent() {
  // 获取当前博客信息
  let { message } = flushBlogItem();
  return (
    <ul className="list-group list-group-flush">
      <BlogBodyContainerContentImg />
      <BlogBodyContainerContentType />
      <BlogBodyContainerContentBody />
      <BlogBodyContainerContentLike />
      <ComponentLoadAndRender
        noborder
        judge={() => message}
        map={() => <BlogBodyContainerContentMessage />}
        nothing={() => (
          <li className="list-group-item">
            <div className="my-2 my-lg-5 py-1 py-lg-3 text-center text-info">
              当前博客评论功能关闭
            </div>
          </li>
        )}
      />
    </ul>
  );
}

export default BlogBodyContainerContent;
