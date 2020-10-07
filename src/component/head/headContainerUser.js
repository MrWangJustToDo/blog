import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import headJpg from "../../image/head.jpg";

function HeadContainerUser() {
  let dispatch = useDispatch();
  let { loginUsername } = useSelector((state) => state);
  let logoutHandler = useCallback(() => {
    dispatch({ type: "logout" });
  }, [dispatch]);
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
          <span className="small dropdown-toggle">{loginUsername}</span>
        </button>
        <div className="dropdown-menu w-100  animate__animated animate__fadeIn animate__faster">
          <Link
            className="dropdown-item small"
            to="/index"
            onClick={logoutHandler}
          >
            退出
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeadContainerUser;
