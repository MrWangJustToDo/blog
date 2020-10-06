import React from "react";
import { useSelector } from "react-redux";
import BlogBodyContainerHead from "./blogBodyContainerHead";
import BlogBodyContainerContent from "./blogBodyContainerContent";
import BlogBodyContainerContentLink from "./blogBodyContainerContentLink";
import flushIndex from "../tools/flushIndex";
import flushBlogItem from "../tools/flushBlogItem";
import ToastBodyContainer from "../toast/toastBodyContainer";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import Notfound from "../404/notfound";
import "./blogBodyContainer.css";

function BlogBodyContainer() {
  flushIndex();
  let blog = flushBlogItem();
  let { toastState } = useSelector((state) => state);
  return (
    <ComponentLoadAndRender
      judge={() => blog}
      map={() => (
        <>
          <div className="my-4 b-blog-content position-relative animate__animated animate__fadeIn animate__faster">
            <div className="container px-lg-5 px-sm-2">
              <div className="card">
                <BlogBodyContainerHead />
                <BlogBodyContainerContent />
              </div>
            </div>
          </div>
          <BlogBodyContainerContentLink />
          {toastState ? <ToastBodyContainer /> : ""}
        </>
      )}
      nothing={() => <Notfound />}
      delay={1000}
    />
  );
}

export default BlogBodyContainer;
