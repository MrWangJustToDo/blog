import React, { useCallback, useEffect, useRef } from "react";
import { loadImg } from "../tools/promise";
import jquery from "jquery";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

// 留言验证
export default React.forwardRef((props, ref) => {
  let img = useRef();

  useEffect(() => {
    let imgEle = jquery(img.current);
    if (props.check && !imgEle.prop("load")) {
      loadImg("/captcha", "/captcha/str", imgEle);
      imgEle.prop("load", true);
    } else if (!props.check) {
      imgEle.prop("load", false);
    }
  }, [props]);

  let flushHandler = useCallback(() => {
    loadImg("/captcha", "/captcha/str", jquery(img.current));
  }, []);
  
  return (
    <ComponentLoadAndRender
      judge={() => props.check}
      map={(ref) => (
        <div className="form-group row ml-5 position-absolute">
          <label htmlFor="putcheck" className="col-2 col-form-label">
            验证码:
          </label>
          <img
            className="col-3 border rounded"
            height="34"
            ref={img}
            onClick={flushHandler}
            alt="验证码"
          />
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              id="putcheck"
              ref={ref}
            />
          </div>
        </div>
      )}
      nothing={() => true}
      noborder={true}
      small={true}
      forwardProp={ref}
    />
  );
});
