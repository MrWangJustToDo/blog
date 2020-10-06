const { default: Axios } = require("axios");
const axios = require("axios");
let getImgs = (index, length) => {
  let format = "js";
  let idx = index;
  let n = length;
  let mkt = "zh-CN";
  return Axios.get(
    `https://cn.bing.com/HPImageArchive.aspx?format=${format}&idx=${idx}&n=${n}&mkt=${mkt}`
  ).then((res) => res.data);
};

exports.getImgs = getImgs;
