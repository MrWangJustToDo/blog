import React from "react";
import ArchiveBodyContainerHead from "./archiveBodyContainerHead";
import ArchiveBodyContainerBody from "./archiveBodyContainerBody";
import "./archiveBodyContainer.css";

function ArchiveBodyContainer() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="mx-4">
          <ArchiveBodyContainerHead />
          <ArchiveBodyContainerBody />
        </div>
      </div>
    </div>
  );
}
export default ArchiveBodyContainer;
