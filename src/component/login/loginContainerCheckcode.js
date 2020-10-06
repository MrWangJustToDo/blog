import React from "react";

export default React.forwardRef((props, ref) => {
  function Checkcode(props) {
    return (
      <div className="form-group row align-items-center overflow-hidden">
        <label htmlFor="checkCode" className=" col-sm-3 col-form-label">
          验证码:
        </label>
        <div className="row justify-content-between col-sm-9 px-0 mx-0">
          <div className="my-2 my-md-0"></div>
          <input
            type="text"
            className="form-control shadow-none col-sm-8 rounded"
            name="checkCode"
            id="checkCode"
          />
        </div>
      </div>
    );
  }

  return <Checkcode forwardRef={ref} />;
});
