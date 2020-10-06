import React from "react";
import "./loginContainer.css";
import LoginContainerUsername from "./loginContainerUsername";
import LoginContainerPassword from "./loginContainerPassword";
import LoginContainerSubmit from './loginContainerSubmit'

function LoginContainer() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="w-50 card my-4 my-lg-5 px-3 overflow-auto user-select-none b-login-form">
        <h3 class="my-4 text-center">登录后台管理</h3>
        <form className="px-lg-5 px-3 py-2">
          <LoginContainerUsername />
          <LoginContainerPassword />
          <LoginContainerSubmit />
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
