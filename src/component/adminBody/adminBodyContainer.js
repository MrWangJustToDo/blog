import React from "react";
import { useSelector } from "react-redux";
import ToastBodyContainer from "../toast/toastBodyContainer";
import AdminBodyContainerHead from "./adminBodyContainerHead";
import AdminBodyContainerPublish from "./adminBodyContainerPublish";
import "./adminBodyContainer.css";

function AdminBodyContainer() {
  let { adminType, toastState } = useSelector((state) => state);
  return (
    <>
      <AdminBodyContainerHead />
      {adminType === "publish" ? (
        <AdminBodyContainerPublish />
      ) : (
        ""
        // <AdminBodyContainerSearch />
      )}
      {toastState ? <ToastBodyContainer /> : ""}
    </>
  );
}
export default AdminBodyContainer;
