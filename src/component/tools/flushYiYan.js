import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 刷新author信息
export default () => {
  let dispatch = useDispatch();
  let { footComponentYiYanData } = useSelector((state) => state);

  // 自动获取
  useEffect(() => {
    dispatch({ type: "getYiYan" });
  }, [dispatch]);

  // 点击刷新
  let flush = useCallback(() => {
    dispatch({ type: "clearYiYan" });
    dispatch({ type: "getYiYan" });
  }, [dispatch]);
  return { footComponentYiYanData, flush };
};
