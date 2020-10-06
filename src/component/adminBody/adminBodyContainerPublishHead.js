import React from "react";

function AdminBodyContainerPublishHead() {
  return (
    <div className="input-group mb-3">
      <select
        name="blog-tag"
        className="form-control border-info text-info shadow-none position-relative font-weight-bolder b-input-pre-zIndex col-1 b-title-pre"
      >
        <option value="原创">原创</option>
        <option value="转载">转载</option>
        <option value="翻译">翻译</option>
      </select>
      <input
        type="text"
        id="title"
        className="form-control shadow-none col-11"
        placeholder="标题"
        name="blog-title"
      />
    </div>
  );
}
export default AdminBodyContainerPublishHead;
