import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {
  let { id } = useParams();
  let { index } = useSelector((state) => state);
  return index.filter((it) => it.rowid === +id)[0];
};
