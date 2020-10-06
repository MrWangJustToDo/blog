import React from "react";
import AdminBodyContainerHead from "./adminBodyContainerHead";
// import AdminBodyContainerSearch from "./adminBodyContainerSearch";
import AdminBodyContainerPublish from "./adminBodyContainerPublish";
import "./adminBodyContainer.css";
import { useSelector } from "react-redux";

function AdminBodyContainer() {
  let { adminType } = useSelector((state) => state);
  return (
    <>
      <AdminBodyContainerHead />
      {adminType === "publish" ? (
        <AdminBodyContainerPublish />
      ) : (
        ''
        // <AdminBodyContainerSearch />
      )}
    </>
  );
}
export default AdminBodyContainer;
