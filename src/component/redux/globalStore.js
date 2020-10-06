import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducerFunction } from "./actionReducer";
import {
  yiYanSaga,
  otherSaga,
  authorSaga,
  blogTypeSaga,
  indexSaga,
  blogPublishSaga,
  blogMessageSaga,
  blogPrimaryReplaySaga,
  blogReplaySaga,
  addReadCountSaga,
} from "./saga";

// 全局store的reducer处理函数
function listFilterReducer(state, action) {
  let handler = reducerFunction[action.type];
  if (handler) {
    try {
      let re = handler(state, action);
      return re;
    } catch (e) {
      return state;
    }
  } else {
    return state;
  }
}

// 使用redux-saga中间件
const sagaMiddleware = createSagaMiddleware();

// 使用自定义中间件获取异步请求
export default createStore(
  listFilterReducer,
  {
    // 是否登录
    isLogin: false,
    // 登录用户名
    loginUsername: "",
    // head组件的显示数据
    headComponentContentArr: ["首页", "分类", "归档", "关于我"],
    // head组件的icon-font类名
    headComponentIconArr: ["home", "lightbulb", "clone", "info"],
    // head组件的link-to路径
    headComponentLinkArr: ["/index", "/type", "/archive", "/about"],
    // blog文章中数量
    blogTotal: 0,
    // index信息
    index: [],
    // index页面每一页显示的文章数目
    indexContentLength: 4,
    // index当前的页码数
    indexContentPage: 1,
    // 博客总页数
    indexContentTotalPages: 0,
    // 数据加载
    isLoaded: false,
    // 其他项目数据
    other: [],
    // author 信息
    author: null,
    // 一言数据
    footComponentYiYanData: null,
    // 博客分类,按照文章数从大到小排序
    blogTypes: null,
    // 博客每一分类对应的文章数目
    blogTypeOfContents: null,
    // 当前选中的分类,使用索引
    blogTypeSelect: null,
    // 缓存md编辑内容
    temp: "",
    // admin页面的状态
    adminType: "publish",
    // 当前博客留言信息
    message: [],
    // 当前博客总的留言条数
    messageTotal: 0,
    // 博客留言状态
    messageState: false,
    // 留言一页能显示的数量
    messageContentLength: 4,
    // 留言总页数
    messageContentTotalPages: 0,
    // 当前留言页数
    messageContentPage: 1,
    // 弹出信息组件
    toastState: false,
    // 弹出信息内容
    toastMessage: "",
    // primaryReplayId
    primaryReplayId: null,
    // 子组件回复
    childReplayId: null,
  },
  applyMiddleware(sagaMiddleware)
);

// run saga
sagaMiddleware.run(yiYanSaga);
sagaMiddleware.run(otherSaga);
sagaMiddleware.run(authorSaga);
sagaMiddleware.run(blogTypeSaga);
sagaMiddleware.run(indexSaga);
sagaMiddleware.run(blogPublishSaga);
sagaMiddleware.run(blogMessageSaga);
sagaMiddleware.run(blogPrimaryReplaySaga);
sagaMiddleware.run(blogReplaySaga);
sagaMiddleware.run(addReadCountSaga);
