import React from "react";

function LoginContainerUsername() {
  return (
    <div className="form-group row align-items-center">
      <label htmlFor="username" className=" col-sm-3 col-form-label">
        姓名:
      </label>
      <input
        type="text"
        className="form-control col-sm-9"
        name="username"
        id="username"
        placeholder="请输入用户名"
      />
    </div>
  );
}

export default LoginContainerUsername;
