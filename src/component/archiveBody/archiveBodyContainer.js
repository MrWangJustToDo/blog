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
          />
        </div>
      </div>
    </div>
  );
}
export default ArchiveBodyContainer;
