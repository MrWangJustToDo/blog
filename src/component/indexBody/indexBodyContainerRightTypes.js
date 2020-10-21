import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import flushBlogType from "../tools/flushBlogType";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function IndexBodyContainerRightTypes() {
  let dispatch = useDispatch();
  // 刷新类型
  let blogTypes = flushBlogType();
  
  let { blogTypeOfContents } = useSelector((state) => state);
  // 点击
  let clickHandler = useCallback(
    (e) => {
      dispatch({ type: "changeTypeSelect", data: e.target.dataset.type });
    },
    [dispatch]
  );
  return (
    <div className="card mt-4 mt-md-0">
      <div className="card-header d-flex justify-content-between align-items-center small b-card-header-border">
        <span>
          <i className="fas fa-lightbulb mr-2"></i> 分类
        </span>
        <Link className="text-decoration-none text-info" to="/type">
          <span className="mr-2">more</span>
          <i className="fas fa-angle-double-right align-middle"></i>
        </Link>
      </div>
      <div className="card-body">
        <div className="list-group">
          <ComponentLoadAndRender
            judge={() => blogTypes}
            map={() =>
              blogTypes
                .filter((_, index) => index < 4)
                .map((it, index) => {
                  return (
                    <Link
                      key={index}
                      to="/type"
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      onClick={clickHandler}
                      data-type={it}
                    >
                      {it}
                      <span className="badge border border-info text-info">
                        {blogTypeOfContents[index]}
                      </span>
                    </Link>
                  );
                })
            }
            nothing={() => (
              <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                未获取到文章类型
              </div>
            )}
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default IndexBodyContainerRightTypes;
