import React from "react";
import flushAuthor from "../tools/flushAuthor";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

// 作者信息
function FootContainerConnectionMe() {
  let author = flushAuthor();
  return (
    <div className="col-md-3 border-right border-secondary text-white pb-2">
      <h6 className="mb-1 mb-lg-3">联系我</h6>
      <ComponentLoadAndRender
        judge={() => author}
        map={() =>
          Object.keys(author)
            .filter((it) => it === "qq" || it === "email")
            .map((it, index) => (
              <dl key={index} className="row b-footer-font text-secondary mb-1">
                <dd className="col-sm-5 text-lg-right">{it}</dd>
                <dd className="col-sm-7 text-lg-left text-truncate">
                  {author[it]}
                </dd>
              </dl>
            ))
        }
        nothing={() => (
          <div className="b-footer-font text-secondary mb-1">
            <div className="text-center">...</div>
          </div>
        )}
        delay={1000}
        noborder={true}
        small={true}
      />
    </div>
  );
}

export default FootContainerConnectionMe;
