import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import flushPage from "../tools/flushPage";

// 前后分页点击
function IndexBodyContainerLeftFootPages() {
  let dispatch = useDispatch();
  let { indexContentPage, indexContentTotalPages } = flushPage();
  // 后一页
  let nextHandler = useCallback(() => {
    dispatch({ type: "changeIndexContentPage", data: +indexContentPage + 1 });
  }, [dispatch, indexContentPage]);

  // 前一页
  let preHandler = useCallback(() => {
    dispatch({ type: "changeIndexContentPage", data: +indexContentPage - 1 });
  }, [dispatch, indexContentPage]);

  return (
    <div className="card-footer d-flex justify-content-between align-items-center bg-transparent">
      <button
        type="button"
        className="btn btn-sm btn-outline-info"
        disabled={indexContentPage > 1 ? false : true}
        onClick={preHandler}
      >
        前一页
      </button>
      <span
        className="b-content-current-page text-info"
        data-page={indexContentPage}
      ></span>
      <button
        type="button"
        className="btn btn-sm btn-outline-info"
        disabled={indexContentPage < indexContentTotalPages ? false : true}
        onClick={nextHandler}
      >
        后一页
      </button>
    </div>
  );
}

export default IndexBodyContainerLeftFootPages;
