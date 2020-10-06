import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function TypeBodyContainerHeadBtn(props) {
  let { blogTypeSelect } = useSelector((state) => state);
  let dispatch = useDispatch();
  let clickHandler = useCallback(() => {
    dispatch({ type: "changeTypeSelect", data: props.it });
  }, [dispatch, props]);
  return (
    <button
      className={
        "btn btn-outline-info shadow-none btn-sm m-1" +
        (props.it === blogTypeSelect ? " active" : "")
      }
      onClick={clickHandler}
    >
      <span>{props.it}</span>
      <span className="ml-3 align-middle small">{props.count}</span>
    </button>
  );
}

export default TypeBodyContainerHeadBtn;
