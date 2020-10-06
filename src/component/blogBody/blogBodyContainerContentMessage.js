import React from "react";
import BlogBodyContainerContentMessagePut from "./blogBodyContainerContentMessagePut";
import BlogBodyContainerContentMessagePages from "./blogBodyContainerContentMessagePages";
import BlogBodyContainerContentMessagePrimaryBody from "./blogBodyContainerContentMessagePrimaryBody";
import flushMessagePage from "../tools/flushMessagePage";
import flushBlogMessage from "../tools/flushBlogMessage";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

// 留言页面
function BlogBodyContainerContentMessage() {
  // 获取当前博客的全部留言
  let message = flushBlogMessage();
  // 获取页码数
  let { messageContentLength, messageContentPage } = flushMessagePage();
  return (
    <li className="list-group-item small animate__animated animate__fadeIn animate__faster">
      <div className="card">
        <h5 className="card-header ">留言区</h5>
        <div className="card-body">
          <ComponentLoadAndRender
            judge={(message) => message.length}
            map={(message) =>
              message
                .filter(
                  (_, index) =>
                    index >= (messageContentPage - 1) * messageContentLength &&
                    index < messageContentPage * messageContentLength
                )
                .map((it, idx) => (
                  <BlogBodyContainerContentMessagePrimaryBody
                    key={idx}
                    {...it}
                  />
                ))
            }
            nothing={() => (
              <div className="my-2 text-center">当前博客还没有评论。。。</div>
            )}
            forwardProp={message}
            delay={300}
          />
        </div>
        <BlogBodyContainerContentMessagePages />
      </div>
      <BlogBodyContainerContentMessagePut />
    </li>
  );
}

export default BlogBodyContainerContentMessage;
