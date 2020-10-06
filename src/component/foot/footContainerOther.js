import React from "react";
import flushOther from "../tools/flushOther";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

// 个人项目
function FootContainerOther() {
  let other = flushOther();
  return (
    <div className="col-md-3 border-right border-secondary text-white pb-2">
      <h6 className="mb-1 mb-lg-3">其他项目</h6>
      <ul className="list-unstyled b-footer-font">
        <ComponentLoadAndRender
          judge={() => other.length > 0}
          map={() =>
            other.map((it, index) => (
              <li key={index} className="text-truncate b-hover my-1">
                <a
                  href={it.link}
                  className="text-decoration-none text-secondary d-flex justify-content-between align-items-center"
                >
                  <i className={"fas col-sm-5 text-right " + it.icon}></i>
                  <span className="col-sm-7 text-left">{it.name}</span>
                </a>
              </li>
            ))
          }
          nothing={() => (
            <li className="text-truncate b-hover my-1">
              <div className="text-decoration-none text-secondary">
                <span className="text-center">...</span>
              </div>
            </li>
          )}
          delay={1000}
          noborder={true}
          small={true}
        />
      </ul>
    </div>
  );
}

export default FootContainerOther;
