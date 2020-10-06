import React, { useEffect, useRef } from "react";
import { toCanvas } from "qrcode";

function IndexBodyContainerRightLink() {
  let ref = useRef();

  useEffect(() => {
    let a = document.createElement("a");
    a.href = "#";
    toCanvas(ref.current, a.href);
  }, [ref]);

  return (
    <div className="border-top position-relative text-center mt-4">
      <span className="position-absolute bg-white b-card-messege small px-4">
        手机上访问
      </span>
      <div className="d-flex justify-content-center mt-4">
        <div className="border rounded">
          <canvas title="扫码手机上继续看" ref={ref}></canvas>
        </div>
      </div>
    </div>
  );
}

export default IndexBodyContainerRightLink;
