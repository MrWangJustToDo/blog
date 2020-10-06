import React from "react";
import { Link } from "react-router-dom";
import HeadContainerUl from "./headContainerUl";
import HeadContainerForm from "./headContainerForm";
import HeadContainerUser from "./headContainerUser";
import HeadContainerTagNavBtn from "./headContainerTagNavBtn";
import "./headContainer.css";
import { useSelector } from "react-redux";

function HeadContainer() {
  let { isLogin } = useSelector((state) => state);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-4 user-select-none b-nav-shadow animate__animated animate__fadeIn animate__faster">
      <div className="container-xl">
        <Link
          className="navbar-brand text-info display-2 font-weight-bold"
          to="/index"
        >
          Blog
        </Link>
        <HeadContainerTagNavBtn />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <HeadContainerUl />
          {isLogin ? <HeadContainerUser /> : <HeadContainerForm />}
        </div>
      </div>
    </nav>
  );
}

export default HeadContainer;
