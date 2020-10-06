import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminBodyContainerPublishHead from "./adminBodyContainerPublishHead";
import AdminBodyContainerPublishType from "./adminBodyContainerPublishType";
import AdminBodyContainerPublishEditor from "./adminBodyContainerPublishEditor";
import AdminBodyContainerPublishBtns from "./adminBodyContainerPublishBtns";
import AdminBodyContainerPublishSubmit from "./adminBodyContainerPublishSubmit";
import formSerialize from "../tools/formSerialize";

function AdminBodyContainerPublish() {
  let ref = useRef();
  let dispatch = useDispatch();
  let { temp, blogTypes, blogTypeOfContents } = useSelector((state) => state);

  let submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      let data = formSerialize(ref.current);
      data["blog-content"] = temp;
      data["blog-create"] = new Date().toString();
      data["blog-type-count"] =
        blogTypeOfContents[blogTypes.indexOf(data["blog-type"])] + 1;
      dispatch({ type: "publishBlog", data });
    },
    [dispatch, temp, blogTypes, blogTypeOfContents]
  );

  return (
    <div className="mt-5">
      <div className="container">
        <div className="mx-4 pb-5">
          <form onSubmit={submitHandler} ref={ref}>
            <AdminBodyContainerPublishHead />
            <AdminBodyContainerPublishEditor />
            <AdminBodyContainerPublishType />
            <AdminBodyContainerPublishBtns />
            <AdminBodyContainerPublishSubmit />
          </form>
        </div>
      </div>
    </div>
  );
}
export default AdminBodyContainerPublish;
