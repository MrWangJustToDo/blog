import moment from "moment";
import "moment/locale/zh-cn";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import headJpg from "../../image/head.jpg";
import otherJpg from "../../image/other.jpg";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import BlogBodyContainerContentReplayBtn from "./blogBodyContainerContentReplayBtn";
import BlogBodyContainerContentMessageChildBodyReplay from "./blogBodyContainerContentMessageChildBodyReplay";

// 回复评论组件
function BlogBodyContainerContentMessageChildBody(props) {
  let dispatch = useDispatch();
  let { childReplayId } = useSelector((state) => state);
  let clickHandler = useCallback(() => {
    dispatch({
      type: "changeChildReplayId",
      data: props.primaryid + ":" + props.replayid,
    });
  }, [props, dispatch]);
  return (
    <div className="media py-2">
      <img
        src={props.isauthor ? headJpg : otherJpg}
        className="mr-3 rounded"
        alt="头像"
        width="35"
      />
      <div className="media-body">
        <h5 className="small mt-0">
          {!props.isauthor && "访客"}
          {props.isauthor ? (
            <span className="b-message-title text-info px-2 rounded">笔者</span>
          ) : (
            <span className="b-message-title text-primary px-2 rounded">
              {props.fromip}
            </span>
          )}
          <span className="mx-1">回复</span>
          {!props.toauthor && "访客"}
          {props.toauthor ? (
            <span className="b-message-title text-info px-2 rounded">
              笔者 :
            </span>
          ) : (
            <span className="b-message-title text-primary px-2 rounded">
              {props.toip} :
            </span>
          )}
          <span className="float-right badge badge-primary">
            {moment(new Date()).to(moment(new Date(props.created)))}
          </span>
        </h5>
        <p className="b-message-three-line">{props.content}</p>
        <div>
          <ComponentLoadAndRender
            judge={() =>
              childReplayId === props.primaryid + ":" + props.replayid
            }
            map={() => (
              <BlogBodyContainerContentMessageChildBodyReplay
                last={props.last}
                {...props}
              />
            )}
            nothing={() => (
              <BlogBodyContainerContentReplayBtn
                btn={true}
                title={"回复"}
                forwardClick={clickHandler}
                className="b-btn-message btn-outline-info"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogBodyContainerContentMessageChildBody;
