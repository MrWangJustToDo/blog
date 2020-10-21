import React from "react";
import { useSelector } from "react-redux";
import TypeBodyContainerContentList from "./typeBodyContainerContentList";
import flushIndex from "../tools/flushIndex";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function TypeBodyContainerContent() {
  let index = flushIndex();
  let { blogTypeSelect } = useSelector((state) => state);
  return (
    <div className="card m-4">
      <ul className="list-group list-group-flush">
        <ComponentLoadAndRender
          noborder={true}
          judge={() => index.filter((it) => it.type === blogTypeSelect).length}
          map={() =>
            index
              .filter((it) => it.type === blogTypeSelect)
              .map((it) => (
                <TypeBodyContainerContentList key={it.rowid} {...it} />
              ))
          }
          nothing={() => (
            <li className="list-group-item">
              <div className="py-1 py-lg-5 text-center text-info">
                当前标签下没有文章
              </div>
            </li>
          )}
          delay={1000}
        />
      </ul>
    </div>
  );
}

export default TypeBodyContainerContent;
