import React from "react";

function AdminBodyContainerPublishBtns() {
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          name="blog-add"
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="推荐"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          推荐
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          name="blog-add"
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="赞赏"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox3">
          赞赏
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          name="blog-add"
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="评论"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox4">
          评论
        </label>
      </div>
    </>
  );
}
export default AdminBodyContainerPublishBtns;
