import React, { useCallback, useState } from "react";

function LoginContainerPassword() {
  const [passwordCheck, setPasswordCheck] = useState(false);

  let passwordHandler = useCallback(() => {
    setPasswordCheck(!passwordCheck);
  }, [passwordCheck]);

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
