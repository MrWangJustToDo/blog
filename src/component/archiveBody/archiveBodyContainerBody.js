import React from "react";

function ArchiveBodyContainerBody() {
  return (
    <>
      <h3 className="text-center display-5 my-3">2018</h3>
      <ul className="list-group user-select-none mb-5">
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <i className="fa fa-circle b-list-item-circle-mini align-middle text-info pr-1"></i>
            <span>学习的方法</span>
            <span className="b-list-item-label-mini align-middle border rounded border-info text-info px-2 ml-2">
              10月20
            </span>
          </div>
          <span className="b-list-item-label-mini border rounded border-danger text-danger px-2">
            原创
          </span>
        </li>
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <i className="fa fa-circle b-list-item-circle-mini align-middle text-info pr-1"></i>
            <span>Java面试题</span>
            <span className="b-list-item-label-mini align-middle border rounded border-info text-info px-2 ml-2">
              9月20
            </span>
          </div>
          <span className="b-list-item-label-mini border rounded border-danger text-danger px-2">
            转载
          </span>
        </li>
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <i className="fa fa-circle b-list-item-circle-mini align-middle text-info pr-1"></i>
            <span>计算机网络</span>
            <span className="b-list-item-label-mini align-middle border rounded border-info text-info px-2 ml-2">
              4月23
            </span>
          </div>
          <span className="b-list-item-label-mini border rounded border-danger text-danger px-2">
            转载
          </span>
        </li>
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <i className="fa fa-circle b-list-item-circle-mini align-middle text-info pr-1"></i>
            <span>人工智能、大数据</span>
            <span className="b-list-item-label-mini align-middle border rounded border-info text-info px-2 ml-2">
              1月30
            </span>
          </div>
          <span className="b-list-item-label-mini border rounded border-danger text-danger px-2">
            转载
          </span>
        </li>
      </ul>
    </>
  );
}
export default ArchiveBodyContainerBody;
