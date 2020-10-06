import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function BlogBodyContainerHeadAuthor() {
  let dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch({ type: "clearMessage" });
  }, [dispatch]);
  return (
    <nav aria-label="breadcrumb">
      <ol className="bg-transparent small breadcrumb m-0 user-select-none">
        <li className="breadcrumb-item text-info b-blog-content-back">
          <Link className="text-reset text-decoration-none" to="/index">
            博客
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          正文
        </li>
      </ol>
    </nav>
  );
}

export default BlogBodyContainerHeadAuthor;
