import axios from "axios";

export let promiseNext = (time, action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (action) {
        action();
      }
      resolve();
    }, time);
  });

export function loadImg(imgUrl, strUrl, imageEle) {
  // 页面加载完成后再加载图片, 加载图片完成后再加载验证码提示
  new Promise((resolve) => {
    imageEle.off("click");
    imageEle.attr("src", `${imgUrl}?time=${Date.now()}`);
    imageEle.on("click", () => {
      loadImg(imgUrl, strUrl, imageEle);
    });
    imageEle.on("load", () => {
      resolve(imageEle);
    });
  })
    .then((value) =>
      axios
        .get(strUrl)
        .then((res) => res.data)
        .then((data) => value.attr("title", data.state))
    )
    .catch((e) => console.log("出现错误", e));
}
