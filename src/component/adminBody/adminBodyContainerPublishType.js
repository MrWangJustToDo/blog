import React from "react";
import flushBlogType from "../tools/flushBlogType";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

// 文章类型
function AdminBodyContainerPublishType() {
  let blogTypes = flushBlogType();
  return (
    <div className="form-row mb-3">
      <div className="col">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent border-info text-info position-relative font-weight-bolder b-input-pre-zIndex">
              分类
            </span>
          </div>
          <ComponentLoadAndRender
            judge={() => blogTypes}
            map={() => (
              <select
                name="blog-type"
                id="type"
                className="form-control shadow-none"
                defaultValue="分类"
              >
                <option value="分类" disabled hidden>
                  分类
                </option>
                {blogTypes.map((it, index) => (
                  <option key={index} value={it}>
                    {it}
                  </option>
                ))}
              </select>
            )}
            noborder
          />
        </div>
      </div>
    </div>
  );
}
export default AdminBodyContainerPublishType;
