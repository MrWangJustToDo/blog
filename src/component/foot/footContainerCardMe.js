import React from "react";
import cardMe from "../../image/card-me.png";

function FootContainerCardMe() {
  return (
    <div className="col-md-2 border-right border-secondary pb-3">
      <img
        src={cardMe}
        className="rounded img-thumbnail"
        alt="二维码"
        width="100"
        title="扫码关注"
      />
    </div>
  );
}

export default FootContainerCardMe;
