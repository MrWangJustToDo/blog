import React, { useEffect, useState } from "react";

// 加载渲染组件
function ComponentLoadAndRender(props) {
  const [load, setLoad] = useState(
    <div className="my-lg-4 my-2">
      <div className="container px-lg-5 px-sm-2">
        <div
          className={"card bg-transparent " + (props.noborder && "border-0")}
        >
          <div className="my-lg-4 text-center">
            <div
              className={
                "spinner-border text-info" +
                (props.small ? " spinner-border-sm" : "")
              }
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    let id;
    if (!props.delay) {
      if (props.nothing && typeof props.nothing === "function") {
        setLoad(props.nothing());
      }
    } else {
      id = setTimeout(() => {
        if (props.nothing && typeof props.nothing === "function") {
          setLoad(props.nothing());
        }
      }, props.delay);
    }
    return () => clearTimeout(id);
  }, [props]);
  return (
    <>
      {!props.judge ||
      typeof props.judge !== "function" ||
      !props.judge(props.forwardProp) ? (
        load
      ) : props.map && typeof props.map === "function" ? (
        props.map(props.forwardProp)
      ) : props.norender ? (
        typeof props.norender === "function" && props.norender()
      ) : (
        <div className="my-4">
          <div className="container px-lg-5 px-sm-2">
            <div className="card bg-transparent">
              <div className="my-4 text-center text-danger">
                load success, but nothing to render!!!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ComponentLoadAndRender;
