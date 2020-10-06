import { useSelector } from "react-redux";

export default () => {
  let {
    messageContentLength,
    messageContentTotalPages,
    messageContentPage,
  } = useSelector((state) => state);
  return { messageContentLength, messageContentTotalPages, messageContentPage };
};
