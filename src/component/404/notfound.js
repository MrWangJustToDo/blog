import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

function Notfound(props) {
  return (
    <div className="my-4">
      <div className="container px-lg-5 px-sm-2">
        <div className="card b-404">
          <div className="card-header py-lg-4 text-danger">404 访问错误</div>
          <div className="card-body">
            <h5 className="card-title display-4 my-lg-4">未知领域</h5>
            <div className="card-text">
              <p className="text-info b-404-content py-lg-5 rounded border px-2">
                这个地方没有任何东西
              </p>
            </div>
            {props.noback ? (
              ""
            ) : (
              <Link
                to="/index"
                className="btn btn-sm btn-primary my-lg-5 mr-lg-5 float-right"
              >
                返回首页
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
