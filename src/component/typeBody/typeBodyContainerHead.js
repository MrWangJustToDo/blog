import React from "react";
import { useSelector } from "react-redux";
import flushBlogType from "../tools/flushBlogType";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import TypeBodyContainerHeadBtn from "./typeBodyContainerHeadBtn";

function TypeBodyContainerHead() {
  flushBlogType();
  let { blogTypes, blogTypeOfContents } = useSelector((state) => state);
  return (
    <div className="card mx-4">
      <h5 className="card-header bg-transparent text-info d-flex justify-content-between align-items-center b-type-header-font">
        <span>分类</span>
        <div className="text-black-50">
          共
          <span
            className="b-content-pages text-info"
            data-pages={blogTypes ? blogTypes.length : 0}
          ></span>
          个
        </div>
      </h5>
      <div className="card-body">
        <ComponentLoadAndRender
          judge={() => blogTypes}
          map={() =>
            blogTypes.map((it, index) => (
              <TypeBodyContainerHeadBtn
                it={it}
                key={index}
                count={blogTypeOfContents[index]}
              />
            ))
          }
          noborder={true}
        />
      </div>
    </div>
  );
}

export default TypeBodyContainerHead;
