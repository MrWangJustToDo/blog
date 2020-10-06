import React, { useCallback, useEffect, useRef } from "react";
import jquery from "jquery";
import { loadImg } from "../tools/promise";

export default React.forwardRef((props, ref) => {
  let img = useRef();

  // 自动加载
  useEffect(() => {
    let imgEle = jquery(img.current);
    loadImg("/captcha", "/captcha/str", imgEle);
  }, []);

  // 点击刷新
  let flushHandler = useCallback(() => {
    loadImg("/captcha", "/captcha/str", jquery(img.current));
  }, []);

  return (
    <>
      <img
        className="col-3 col-lg-1 border rounded"
        height="38"
        ref={img}
        onClick={flushHandler}
        alt="验证码"
      />
      <div className="col-3">
        <input type="text" className="form-control" id="putcheck" ref={ref} />
      </div>
    </>
  );
});
