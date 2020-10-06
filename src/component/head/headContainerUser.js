import React from "react";
import { Link } from "react-router-dom";
import headJpg from "../../image/head.jpg";

function HeadContainerUser() {
  return (
    <div className="text-center">
      <div className="dropdown d-inline-block">
        <button
          className="btn btn-secondary border-0 shadow-none bg-dark b-nav-user d-inline-flex justify-content-around align-items-center"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img className="rounded-circle" src={headJpg} alt="头像" width="30" />
          <span className="small dropdown-toggle">MrWang</span>
        </button>
        <div className="dropdown-menu w-100  animate__animated animate__fadeIn animate__faster">
          <Link className="dropdown-item small" to="/index">
            退出
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeadContainerUser;
