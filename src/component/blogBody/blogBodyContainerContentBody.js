import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import markedInit from "../tools/marked";
import flushBlogItem from "../tools/flushBlogItem";
import "highlight.js/styles/idea.css";

function BlogBodyContainerContentBody() {
  let ref = useRef();
  let dispatch = useDispatch();
  let { title, content, rowid, readcount } = flushBlogItem();

  useEffect(() => {
    if (content && ref.current) {
      try {
        ref.current.innerHTML = markedInit()(content);
      } catch (e) {
        ref.current.innerText = content;
      }
      dispatch({type: 'blogContentLoaded'})
    }
    return () =>
      dispatch({
        type: "addReadcount",
        data: { id: rowid, count: readcount + 1 },
      });
  }, [content, dispatch, rowid, readcount]);

  return (
    <li className="list-group-item">
      <div className="container-lg typo">
        <h1>{title}</h1>
        <br />
        <div className="blog-content" ref={ref}></div>
      </div>
    </li>
  );
}

export default BlogBodyContainerContentBody;
