import React from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminBodyContainerHead() {
  let dispatch = useDispatch();
  let { adminType } = useSelector((state) => state);
  return (
    <div className="border-bottom b-nav-head position-relative">
      <div className="container overflow-hidden">
        <div className="btn-group mx-3 float-right" role="group">
          <button
            type="button"
            className={
              "btn border-bottom-0 rounded-0 b-nav-button-border-color btn-outline-secondary shadow-none " +
              (adminType === "publish" ? "active" : "")
            }
            onClick={() => {
              dispatch({ type: "changeAdminType", data: "publish" });
            }}
          >
            发布
          </button>
          <button
            type="button"
            className={
              "btn border-bottom-0 rounded-0 b-nav-button-border-color btn-outline-secondary shadow-none " +
              (adminType === "list" ? "active" : "")
            }
            onClick={() => {
              dispatch({ type: "changeAdminType", data: "list" });
            }}
          >
            列表
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminBodyContainerHead;
