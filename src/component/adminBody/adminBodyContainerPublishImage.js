import React from "react";

function AdminBodyContainerPublishImage() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text bg-transparent border-info text-info position-relative font-weight-bolder b-input-pre-zIndex">
          首图
        </span>
      </div>
      <input
        type="text"
        id="pic"
        name="blog-link"
        className="form-control shadow-none"
        placeholder="文章首图link,不写自动添加"
      />
    </div>
  );
}
export default AdminBodyContainerPublishImage;
