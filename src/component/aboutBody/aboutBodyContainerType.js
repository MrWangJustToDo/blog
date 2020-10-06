import React from "react";
import { Link } from "react-router-dom";
import clickType from "../tools/clickType";
import flushBlogType from "../tools/flushBlogType";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function AboutBodyContainerAbout() {
  // 刷新blogTypes
  const blogTypes = flushBlogType();
  const clickHandler = clickType();
  return (
    <li className="list-group-item">
      <ComponentLoadAndRender
        judge={() => blogTypes && blogTypes.length}
        map={() =>
          blogTypes.map((it, index) => (
            <Link
              key={index}
              className="d-inline-block b-content-tag m-1 px-2 py-1 text-decoration-none text-info border rounded"
              to="/type"
            >
              <span onClick={clickHandler} data-type={it}>
                {it}
              </span>
            </Link>
          ))
        }
        nothing={() => (
          <div className="my-3 text-center text-danger">
            <small>获取数据失败。。。</small>
          </div>
        )}
        delay={1000}
        noborder={true}
        small={true}
      />
    </li>
  );
}

export default AboutBodyContainerAbout;
