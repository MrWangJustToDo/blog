import React from "react";
import moment from "moment";
import "moment/locale/zh-cn";
import headJpg from "../../image/head.jpg";
import flushAuthor from "../tools/flushAuthor";
import flushBlogItem from "../tools/flushBlogItem";

function BlogBodyContainerHeadAuthor() {
  let author = flushAuthor();
  let blog = flushBlogItem();
  return (
    <ul className="list-unstyled d-inline-flex justify-content-between align-items-center text-truncate b-w-40 m-0">
      <li>
        <div href="#" className="small text-decoration-none text-secondary">
          <img className="rounded-circle" src={headJpg} alt="head" width="30" />
          <span className="ml-2 small text-info">
            {author ? author.username : "none"}
          </span>
        </div>
      </li>
      <li className="ml-2">
        <div href="#" className="small text-decoration-none text-secondary">
          <span className="small">更新于: </span>
          <span className="ml-1 small text-info">
            {blog ? moment(new Date(blog.modify)).calendar() : "none"}
          </span>
        </div>
      </li>
      <li className="ml-2">
        <div href="#" className="small text-decoration-none text-secondary">
          <span className="small">看过: </span>
          <span className="ml-1 small text-info">
            {blog ? blog.readcount : "none"}
          </span>
        </div>
      </li>
    </ul>
  );
}

export default BlogBodyContainerHeadAuthor;
