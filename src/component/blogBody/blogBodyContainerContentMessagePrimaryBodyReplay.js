import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogBodyContainerContentReplayBtn from "./blogBodyContainerContentReplayBtn";
import BlogBodyContainerContentMessagePrimaryBodyReplayImgCheck from "./blogBodyContainerContentMessagePrimaryBodyReplayImgCheck";

function BlogBodyContainerContentMessagePrimaryBodyReplay(props) {
  let ref = useRef();
  let checkInput = useRef();
  let dispatch = useDispatch();
  let { isLogin } = useSelector((state) => state);
  let replayHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (ref.current.value !== "") {
        // 构建对象...
        let obj = {
          replayid: props.last.length,
          isauthor: isLogin,
          toip: props.fromip,
          toauthor: props.isauthor,
          content: ref.current.value,
          created: new Date().toLocaleString(),
        };
        dispatch({
          type: "addReplay",
          data: {
            last: props.last,
            current: obj,
            primaryid: props.primaryid,
            blogid: props.blogid,
            checkcode: checkInput.current.value,
          },
        });
        ref.current.value = "";
        checkInput.current.value = "";
        dispatch({ type: "changePrimaryReplayId", data: null });
      }
    },
    [dispatch, props, isLogin]
  );
  let cancelHandler = useCallback(() => {
    dispatch({ type: "changePrimaryReplayId", data: null });
  }, [dispatch]);
  return (
    <form onSubmit={replayHandler}>
      <div className="form-row align-items-center">
        <div className="col-4 col-lg-3">
          <textarea
            className="form-control form-control-sm b-replay-text"
            placeholder="请输入回复"
            name="content"
            ref={ref}
            autoFocus
          ></textarea>
        </div>
        <BlogBodyContainerContentMessagePrimaryBodyReplayImgCheck
          ref={checkInput}
        />
        <div className="col-2">
          <BlogBodyContainerContentReplayBtn
            title={"回复"}
            className="b-btn-message btn-outline-info"
          />
          <BlogBodyContainerContentReplayBtn
            btn={true}
            title={"取消"}
            forwardClick={cancelHandler}
            className="b-btn-message btn-outline-info ml-lg-2"
          />
        </div>
      </div>
    </form>
  );
}

export default BlogBodyContainerContentMessagePrimaryBodyReplay;
