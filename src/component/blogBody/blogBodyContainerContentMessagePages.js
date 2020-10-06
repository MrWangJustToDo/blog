import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import flushMessagePage from "../tools/flushMessagePage";

// 留言分页组件
function BlogBodyContainerContentMessagePages() {
  let dispatch = useDispatch();
  let { messageContentPage, messageContentTotalPages } = flushMessagePage();
  // 后一页
  let nextHandler = useCallback(() => {
    dispatch({
      type: "changeMessageContentPage",
      data: +messageContentPage + 1,
    });
  }, [dispatch, messageContentPage]);

  // 前一页
  let preHandler = useCallback(() => {
    dispatch({
      type: "changeMessageContentPage",
      data: +messageContentPage - 1,
    });
  }, [dispatch, messageContentPage]);
  return (
    <div className="card-footer d-flex justify-content-between align-items-center bg-transparent">
      <button
        type="button"
        className="btn btn-sm btn-outline-info"
        disabled={messageContentPage > 1 ? false : true}
        onClick={preHandler}
      >
        前一页
      </button>
      <span
        className="b-content-current-page text-info"
        data-page={messageContentPage}
      ></span>
      <button
        type="button"
        className="btn btn-sm btn-outline-info"
        disabled={messageContentPage < messageContentTotalPages ? false : true}
        onClick={nextHandler}
      >
        后一页
      </button>
    </div>
  );
}

export default BlogBodyContainerContentMessagePages;
