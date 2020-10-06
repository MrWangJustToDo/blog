import axios from "axios";

function yiYanApi(url) {
  return axios.get(url).then((res) => res.data);
}

function axiosGet(url) {
  return axios.get(url).then((res) => res.data);
}

function axiosPost(url, config = {}) {
  return axios.post(url, config).then((res) => res.data);
}

export { yiYanApi, axiosGet, axiosPost };
