import { useSelector } from "react-redux";

export default () => {
  let {
    indexContentPage,
    indexContentLength,
    indexContentTotalPages,
  } = useSelector((state) => state);
  return { indexContentPage, indexContentLength, indexContentTotalPages };
};
