import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 刷新blogTypes
export default () => {
  let dispatch = useDispatch();
  let { blogTypes } = useSelector((state) => state);
  // 刷新类型
  useEffect(() => {
    if (!blogTypes) {
      dispatch({ type: "getBlogTypes" });
    }
  }, [dispatch, blogTypes]);
  return blogTypes;
};
