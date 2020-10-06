import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 刷新index数据
export default () => {
  let { isLoaded, index } = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch({ type: "getIndex" });
    }
  }, [dispatch, isLoaded]);
  return index;
};
