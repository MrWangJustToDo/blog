import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { promiseNext } from "../tools/promise";
import "./toastBodyContainer.css";
import jquery from "jquery";

function ToastBodyContainer() {
  let toast = useRef();
  let dispatch = useDispatch();
  let { toastState, toastMessage } = useSelector((state) => state);
  useEffect(() => {
    if (toastState) {
      jquery(toast.current).toast("show");
      promiseNext(2000, () => {
        dispatch({ type: "disableToast" });
      });
    }
  }, [toastState, dispatch]);
  return (
    <div
      className="toast position-fixed b-toast-info"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="10000"
      ref={toast}
    >
      <div className="toast-header">
        <strong className="mr-4">回复发送失败</strong>
        <small className="text-muted"> 刚刚</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body text-danger">{toastMessage}</div>
    </div>
  );
}

export default ToastBodyContainer;
