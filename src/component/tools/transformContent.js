import marked from "marked";
export default (value) => {
  let re = "";
  try {
    re = marked(value).replace(/<\/?[^>]*>/g, "");
  } catch (e) {
    re = value;
  }
  return re;
};
