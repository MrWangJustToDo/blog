import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default () => {
  let dispatch = useDispatch();
  return useCallback(
    (e) => {
      dispatch({ type: "changeTypeSelect", data: e.target.dataset.type });
    },
    [dispatch]
  );
};
