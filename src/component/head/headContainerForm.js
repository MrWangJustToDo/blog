import React from "react";

// 搜索表单组件
function HeadContainerForm() {
  return (
    <form className="form-inline my-1 my-lg-0 b-search-form">
      <input
        className="form-control mr-sm-2 col-9"
        type="search"
        placeholder="搜索暂时没做......"
        aria-label="Search"
      />
      <button className="btn btn-outline-info my-1 my-sm-0 ml-1" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default HeadContainerForm;
