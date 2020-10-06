import React from "react";
import { useSelector } from "react-redux";

function IndexBodyContainerLeftHeadPages() {
  let { indexContentTotalPages } = useSelector((state) => state);
  return (
    <h5 className="card-header d-flex justify-content-between align-items-center bg-transparent text-info user-select-none b-index-content-head-font">
      <span>博客</span>
      <div className="text-black-50">
        共
        <span
          className="b-content-pages text-info"
          data-pages={indexContentTotalPages}
        ></span>
        页
      </div>
    </h5>
  );
}

export default IndexBodyContainerLeftHeadPages;
