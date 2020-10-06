import React from "react";
import FootContainerCardMe from "./footContainerCardMe";
import FootContainerOther from "./footContainerOther";
import FootContainerConnectionMe from "./footContainerConnectionMe";
import FootContainerYiYan from "./footContainerYiYan";
import "./footContainer.css";

function FootContainer() {
  return (
    <footer className="bg-dark text-center user-select-none b-foot-shadow animate__animated animate__fadeIn animate__faster">
      <div className="container-md py-4">
        <div className="row">
          <FootContainerCardMe />
          <FootContainerOther />
          <FootContainerConnectionMe />
          <FootContainerYiYan />
        </div>
      </div>
      <div className="container-md">
        <p className="b-footer-font border-top border-secondary text-monospace text-secondary py-4 mb-0">
          Copyright <i className="fa fa-copyright"></i> 2017-2020 MrWang
        </p>
      </div>
    </footer>
  );
}

export default FootContainer;
