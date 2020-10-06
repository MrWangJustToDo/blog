import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 刷新author信息
export default () => {
  let dispatch = useDispatch();
  let { author } = useSelector((state) => state);
  useEffect(() => {
    if (!author) {
      dispatch({ type: "getAuthor" });
    }
  }, [author, dispatch]);
  return author;
};
