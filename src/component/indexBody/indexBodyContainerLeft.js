import React from "react";
import IndexBodyContainerLeftContent from "./indexBodyContainerLeftContent";
import IndexBodyContainerLeftHeadPages from "./indexBodyContainerLeftHeadPages";
import IndexBodyContainerLeftFootPages from "./indexBodyContainerLeftFootPages";
import flushPage from "../tools/flushPage";
import flushIndex from "../tools/flushIndex";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import Notfound from "../404/notfound";

function IndexBodyContainerLeft() {
  let index = flushIndex();
  let { indexContentPage, indexContentLength } = flushPage();
  return (
    <div className="col-md-8 overflow-hidden">
      <div className="card">
        <IndexBodyContainerLeftHeadPages />
        <ComponentLoadAndRender
          judge={() => index.length}
          map={() =>
            index
              .filter(
                (_, index) =>
                  index >= (indexContentPage - 1) * indexContentLength &&
                  index < indexContentPage * indexContentLength
              )
              .map((it) => (
                <IndexBodyContainerLeftContent key={it.rowid} {...it} />
              ))
          }
          nothing={() => <Notfound noback={true} />}
          delay={1000}
        />
        <IndexBodyContainerLeftFootPages />
      </div>
    </div>
  );
}

export default IndexBodyContainerLeft;
