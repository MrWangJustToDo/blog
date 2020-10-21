import React from "react";
import { useSelector } from "react-redux";
import ArchiveBodyContainerHead from "./archiveBodyContainerHead";
import ArchiveBodyContainerBody from "./archiveBodyContainerBody";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";
import "./archiveBodyContainer.css";

function ArchiveBodyContainer() {
  let { archiveIndex } = useSelector((state) => state);
  return (
    <div className="mt-5 b-archive-content animate__animated animate__fadeIn animate__faster ">
      <div className="container">
        <div className="mx-4">
          <ArchiveBodyContainerHead />
          <ComponentLoadAndRender
            noborder
            judge={() => archiveIndex}
            map={() => {
              for (let key in archiveIndex) {
                return (
                  <ArchiveBodyContainerBody
                    title={key}
                    list={archiveIndex[key]}
                  />
                );
              }
            }}
            nothing={() => (
              <ul className="list-group user-select-none mb-5">
                <li className="list-group-item">
                  <div className="py-1 py-lg-5 text-center text-info">
                    没有文章数据
                  </div>
                </li>
              </ul>
            )}
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
}
export default ArchiveBodyContainer;
