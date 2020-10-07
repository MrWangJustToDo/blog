import React from "react";

// 提交登录请求

export default React.forwardRef((props, ref) => {
  function Submit(props) {
    return (
      <div className="form-row justify-content-around">
        <button type="submit" className="btn px-5 my-2 btn-info btn-lg">
          登录
        </button>
      </div>
    );
  }
  return <Submit forwardRef={ref} />;
});
