import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginContainerUsername from "./loginContainerUsername";
import LoginContainerPassword from "./loginContainerPassword";
import LoginContainerSubmit from "./loginContainerSubmit";
import formSerialize from "../tools/formSerialize";
import "./loginContainer.css";
import { useHistory } from "react-router";

function LoginContainer() {
  let ref = useRef();
  let history = useHistory();
  let dispatch = useDispatch();
  let { isLogin } = useSelector((state) => state);

  let loginHandler = useCallback(
    (e) => {
      e.preventDefault();
      let data = formSerialize(ref.current);
      dispatch({ type: "login", data });
    },
    [dispatch]
  );

  useEffect(() => {
    if (isLogin) {
      history.push("/index");
    }
  }, [isLogin, history]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100 my-lg-5">
      <div className="w-50 card my-4 my-lg-5 px-3 overflow-auto user-select-none b-login-form">
        <h3 className="my-4 text-center">登录后台管理</h3>
        <form className="px-lg-5 px-3 py-2" ref={ref} onSubmit={loginHandler}>
          <LoginContainerUsername />
          <LoginContainerPassword />
          <LoginContainerSubmit />
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
