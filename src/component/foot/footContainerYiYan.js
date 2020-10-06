import React from "react";
import flushYiYan from "../tools/flushYiYan";
import ComponentLoadAndRender from "../tools/componentLoadAndRender";

function FootContainerYiYan() {
  // 获取一言数据与刷新函数
  let { footComponentYiYanData, flush } = flushYiYan();
  return (
    <div className="col-md-4 text-white" title="点击刷新" onClick={flush}>
      <h6 className="mb-1 mb-lg-3">一言</h6>
      <ComponentLoadAndRender
        judge={() => footComponentYiYanData}
        map={() => (
          <blockquote className="b-footer-font blockquote text-center">
            <p className="mb-0 b-footer-aboutBlog">
              {footComponentYiYanData.hitokoto}
            </p>
            <footer className="blockquote-footer text-right">
              {footComponentYiYanData.from_who}
              <cite className="ml-2" title="Source Title">
                {footComponentYiYanData.from}
              </cite>
            </footer>
          </blockquote>
        )}
        small={true}
        noborder={true}
      />
    </div>
  );
}

export default FootContainerYiYan;
