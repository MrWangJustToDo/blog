import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "for-editor";

function AdminBodyContainerPublishEditor() {
  let dispatch = useDispatch();
  let { temp } = useSelector((state) => state);

  Editor.defaultProps.toolbar = {
    h1: false, // h1
    h2: false, // h2
    h3: false, // h3
    h4: false, // h4
    img: false, // 图片
    link: false, // 链接
    code: false, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: false, // 撤销
    redo: false, // 重做
    save: false, // 保存
    /* v0.2.3 */
    subfield: true, // 单双栏模式
  };

  let cacheHandler = useCallback(
    (str) => {
      dispatch({ type: "changeEditor", data: str });
    },
    [dispatch]
  );

  return (
    <div className="form-row b-editor-md-zIndex " id="text-md">
      <div className="form-control mb-3 border-0" style={{ height: "700px" }}>
        <Editor height="100%" value={temp} onChange={cacheHandler} />
      </div>
    </div>
  );
}
export default AdminBodyContainerPublishEditor;
