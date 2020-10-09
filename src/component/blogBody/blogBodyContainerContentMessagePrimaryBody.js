import moment from "moment";
import "moment/locale/zh-cn";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogBodyContainerContentReplayBtn from "./blogBodyContainerContentReplayBtn";
import BlogBodyContainerContentMessagePrimaryBodyReplay from "./blogBodyContainerContentMessagePrimaryBodyReplay";
import BlogBodyContainerContentMessageChildBody from "./blogBodyContainerContentMessageChildBody";
import headJpg from "../../image/head.jpg";
import otherJpg from "../../image/other.jpg";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function BlogBodyContainerContentMessagePrimaryBody(props) {
  let dispatch = useDispatch();
  let children = JSON.parse(props.children);
  children.sort((o1, o2) => o2.replayid - o1.replayid);
  let { primaryReplayId } = useSelector((state) => state);
  let clickHandler = useCallback(() => {
    dispatch({ type: "changePrimaryReplayId", data: props.primaryid });
  }, [dispatch, props]);
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
            <span className="b-message-title text-info px-2 rounded">
              笔者 :
            </span>
          ) : (
            <span className="b-message-title text-primary px-2 rounded">
              {props.fromip} :
            </span>
          )}
          <span className="float-right badge badge-primary">
            {moment(new Date()).to(moment(new Date(props.created)))}
          </span>
        </h5>
        <p className="b-message-three-line">{props.content}</p>
        <div>
          <ComponentLoadAndRender
            judge={() => primaryReplayId === props.primaryid}
            small={true}
            nothing={() => (
              <BlogBodyContainerContentReplayBtn
                title={"回复"}
                className="b-btn-message btn-outline-info"
                forwardClick={clickHandler}
              />
            )}
            map={() => (
              <BlogBodyContainerContentMessagePrimaryBodyReplay
                last={children}
                {...props}
              />
            )}
          />
        </div>
        <ComponentLoadAndRender
          judge={() => children.length}
          nothing={() => true}
          map={() =>
            children.map((it, idx) => (
              <BlogBodyContainerContentMessageChildBody
                key={idx}
                {...it}
                last={children}
                primaryid={props.primaryid}
                blogid={props.blogid}
              />
            ))
          }
        />
      </div>
    </div>
  );
}

export default BlogBodyContainerContentMessagePrimaryBody;
