import React, { useCallback, useRef } from "react";
import jquery from "jquery";
import ali from "../../image/aliPay.jpg";
import weichat from "../../image/weichatPay.png";

// 打赏页面
function BlogBodyContainerContentLikeBody() {
  let ref = useRef();
  let clickHandler = useCallback((e) => {
    let btn = jquery(e.target);
    let target = jquery(ref.current);
    target.removeClass("d-none");
    btn.prop("state", !btn.prop("state"));
    if (btn.prop("state")) {
      target.show(200);
    } else {
      target.hide(100);
    }
  }, []);
  return (
    <li className="list-group-item">
      <div className="container-lg text-center">
        <button
          type="button"
          className="btn btn-outline-danger font-weight-bold m-5 rounded-pill"
          onClick={clickHandler}
        >
          赞赏
        </button>
        <div className="d-flex justify-content-center">
          <div
            className="position-absolute b-like-cards bg-white border p-2 rounded d-none"
            ref={ref}
          >
            <div className="card b-like-card mr-4 d-inline-block">
              <div className="card-header">微信打赏</div>
              <img src={weichat} className="card-img-top" alt="..." />
            </div>
            <div className="ml-4 card b-like-card d-inline-block">
              <div className="card-header">支付宝打赏</div>
              <img src={ali} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BlogBodyContainerContentLikeBody;
