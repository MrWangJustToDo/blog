import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogBodyContainerContentReplayBtn from "./blogBodyContainerContentReplayBtn";
import BlogBodyContainerContentMessagePutImgCheck from "./blogBodyContainerContentMessagePutImgCheck";
import flushBlogItem from "../tools/flushBlogItem";
import delay from "../tools/delay";

// 留言组件
function BlogBodyContainerContentMessagePut() {
  let ref = useRef();
  // 验证码组件
  const [check, setCheck] = useState(false);
  // 延迟加载
  let checkState = useRef(
    delay((value) => {
      if (value !== "") {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }, 1000)
  );
  let dispatch = useDispatch();
  // 组件输入
  let [value, setValue] = useState("");
  // 获取当前博客
  let { rowid } = flushBlogItem();
  // 获取当前博客的全部留言
  // 获取登录信息,与留言信息
  let { isLogin, message } = useSelector((state) => state);
  // 发布按钮
  let putHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (value !== "") {
        dispatch({
          type: "putPrimaryReplay",
          data: {
            id: rowid,
            content: value,
            isauthor: isLogin,
            primaryid: message.length,
            checkcode: ref.current.value,
          },
        });
        checkState.current("");
        setValue("");
      }
    },
    [dispatch, rowid, isLogin, message, value]
  );
  // 输入评论
  let inputHandler = useCallback((e) => {
    setValue(e.target.value);
    checkState.current(e.target.value);
  }, []);

  return (
    <div className="card border-0">
      <textarea
        className="b-blog-info-textarea my-4 border outline-none"
        placeholder="请输入留言"
        name="messege"
        value={value}
        onChange={inputHandler}
      ></textarea>
      <form className="form-inline" onSubmit={putHandler}>
        <BlogBodyContainerContentReplayBtn
          title="发布"
          className="btn-primary"
        />
        <BlogBodyContainerContentMessagePutImgCheck ref={ref} check={check} />
      </form>
    </div>
  );
}

export default BlogBodyContainerContentMessagePut;
