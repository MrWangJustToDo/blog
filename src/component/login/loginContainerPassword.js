import React from "react";

function LoginContainerPassword() {
  return (
    <div className="form-group row align-items-center">
      <label htmlFor="password" className="col-sm-3 col-form-label">
        密码:
      </label>
      <input
        type="password"
        className="form-control col-sm-9"
        name="password"
        id="password"
        placeholder="请输入密码"
      />
    </div>
  );
}

export default LoginContainerPassword;
