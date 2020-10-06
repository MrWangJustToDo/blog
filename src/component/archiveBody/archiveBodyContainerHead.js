import React from "react";

function ArchiveBodyContainerHead() {
  return (
    <div className="card mb-5">
      <h5 className="card-header bg-transparent text-info d-flex justify-content-between align-items-center b-page-header-font border-0">
        <span>归档</span>
        <div className="text-black-50">
          共<span className="b-content-pages text-info" data-pages="30"></span>
          篇博客
        </div>
      </h5>
    </div>
  );
}
export default ArchiveBodyContainerHead;
