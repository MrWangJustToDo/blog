import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// 文章发布保存按钮
function AdminBodyContainerPublishSubmit() {
  let history = useHistory();
  let dispacth = useDispatch();
  let backHandler = useCallback(() => {
    history.goBack();
  }, [history]);
  let saveHandler = useCallback(() => {
    dispacth({ type: "saveEditor" });
  }, [dispacth]);
  return (
    <div className="form-row mb-5 mt-3 flex-row-reverse">
      <input
        className="btn btn-sm btn-info mx-2 active"
        type="submit"
        value="发布"
      />
      <input
        className="btn btn-sm btn-dark mx-2"
        type="button"
        value="保存"
        onClick={saveHandler}
      />
      <input
        className="btn btn-sm btn-secondary mx-2"
        type="button"
        value="返回"
        onClick={backHandler}
      />
    </div>
  );
}
export default AdminBodyContainerPublishSubmit;
