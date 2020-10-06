import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {
  let { id } = useParams();
  let { message, messageState } = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!message || !messageState) {
      dispatch({ type: "getBlogMessage", data: { id } });
    }
  }, [dispatch, message, id, messageState]);
  return message;
};
