import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 刷新other信息
export default () => {
  let { other } = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!other.length) {
      dispatch({ type: "getOther" });
    }
  }, [other, dispatch]);
  return other;
};
