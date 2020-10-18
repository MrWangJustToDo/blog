import { produce } from "immer";
import { groupBy } from "lodash";
import moment from "moment";
import "moment/locale/zh-cn";

const reducerFunction = {
  // 登录
  login_success(state, action) {
    return produce(state, (proxy) => {
      proxy.isLogin = true;
      proxy.loginUsername = action.data;
    });
  },

  // 登出
  login_failed(state) {
    return produce(state, (proxy) => {
      proxy.isLogin = false;
      proxy.loginUsername = "";
    });
  },

  // head组件点击路由
  headLinkClick(state, action) {
    return produce(state, (proxy) => {
      proxy.headComponentSelect = action.selectId;
    });
  },

  // 获取一言成功
  getYiYan_success(state, action) {
    return produce(state, (proxy) => {
      proxy.footComponentYiYanData = action.data;
    });
  },

  // 获取一言失败
  getYiYan_failed(state, action) {
    return produce(state, (proxy) => {
      console.log(action.data);
      proxy.footComponentYiYanData = { hitokoto: "失败了☹,点击重试" };
    });
  },

  // 清空一言
  clearYiYan(state) {
    return produce(state, (proxy) => {
      proxy.footComponentYiYanData = null;
    });
  },

  // 获取other项目成功
  getOther_success(state, action) {
    return produce(state, (proxy) => {
      proxy.other = action.data;
    });
  },

  // 获取other项目失败
  getOther_failed(state, action) {
    console.log(action.data);
    return state;
  },

  // 获取author信息成功
  getAuthor_success(state, action) {
    return produce(state, (proxy) => {
      proxy.author = action.data;
    });
  },

  // 获取author信息失败
  getAuthor_failed(state, action) {
    console.log(action.data);
    return state;
  },

  // 获取博客类型成功
  getBlogTypes_success(state, action) {
    return produce(state, (proxy) => {
      proxy.blogTypes = action.data.map((it) => it.typename);
      proxy.blogTypeOfContents = action.data.map((it) => it.blogcount);
      proxy.blogTypeSelect = action.data[0]["typename"];
    });
  },

  // 获取博客类型失败
  getBlogTypes_failed(state, action) {
    console.log(action.data);
    state.blogTypes = null;
    state.blogTypeOfContents = null;
    state.blogTypeSelect = null;
    return state;
  },

  // 更改选择的文章类型
  changeTypeSelect(state, action) {
    return produce(state, (proxy) => {
      proxy.blogTypeSelect = action.data;
    });
  },

  // 获取index博客信息成功
  getIndex_success(state, action) {
    return produce(state, (proxy) => {
      proxy.index = action.data;
      proxy.index.forEach((it) => {
        let date = new Date(it["created"]);
        it["createYear"] = date.getFullYear();
        it["moment"] = moment(date).calendar();
      });
      proxy.archiveIndex = groupBy(proxy.index, "createYear");
      proxy.blogTotal = action.data.length;
      proxy.indexContentTotalPages = Math.ceil(
        action.data.length / state.indexContentLength
      );
      proxy.isLoaded = true;
    });
  },

  // 获取index博客信息失败
  getIndex_failed(state, action) {
    console.log(action.data);
    return produce(state, (proxy) => {
      proxy.isLoaded = true;
    });
  },

  // 更改index页面的page
  changeIndexContentPage(state, action) {
    return produce(state, (proxy) => {
      proxy.indexContentPage = action.data;
    });
  },

  // 更改message组件的page
  changeMessageContentPage(state, action) {
    return produce(state, (proxy) => {
      proxy.childReplayId = null;
      proxy.primaryReplayId = null;
      proxy.messageContentPage = action.data;
    });
  },

  // 更改adminType属性
  changeAdminType(state, action) {
    return produce(state, (proxy) => {
      proxy.adminType = action.data;
    });
  },

  // 获取评论信息成功
  blogMessage_success(state, action) {
    return produce(state, (proxy) => {
      proxy.messageState = true;
      proxy.message = action.data;
      proxy.messageTotal = action.data.length;
      proxy.messageContentTotalPages = Math.ceil(
        action.data.length / state.messageContentLength
      );
    });
  },

  // 获取评论信息失败
  blogMessage_failed(state, action) {
    return produce(state, (proxy) => {
      console.log(action.data);
      proxy.message = [];
      proxy.messageTotal = 0;
      proxy.messageState = true;
      proxy.messageContentTotalPages = 0;
    });
  },

  clearMessage(state, action) {
    return produce(state, (proxy) => {
      proxy.message = [];
      proxy.messageTotal = 0;
      proxy.messageState = false;
      proxy.messageContentTotalPages = 0;
    });
  },

  // 保存编辑器数据
  changeEditor(state, action) {
    return produce(state, (proxy) => {
      proxy.temp = action.data;
    });
  },

  // 发表评论成功
  putPrimaryReplay_success(state) {
    return produce(state, (proxy) => {
      // 标记状态,刷新数据
      proxy.messageState = false;
    });
  },

  // 发表评论失败
  putPrimaryReplay_failed(state, action) {
    return produce(state, (proxy) => {
      proxy.toastState = true;
      proxy.toastMessage = action.data;
    });
  },

  // 取消弹出信息
  disableToast(state) {
    return produce(state, (proxy) => {
      proxy.toastState = false;
      proxy.toastMessage = "";
    });
  },

  // 更改主评论回复状态
  changePrimaryReplayId(state, action) {
    return produce(state, (proxy) => {
      proxy.primaryReplayId = action.data;
    });
  },

  // 评论回复成功
  addReplay_success(state) {
    return produce(state, (proxy) => {
      // 标记状态,刷新数据
      proxy.messageState = false;
    });
  },

  // 评论回复失败
  addReplay_failed(state, action) {
    return produce(state, (proxy) => {
      proxy.toastState = true;
      proxy.toastMessage = action.data;
    });
  },

  // 更改childReplayId
  changeChildReplayId(state, action) {
    return produce(state, (proxy) => {
      proxy.childReplayId = action.data;
    });
  },

  // 增加阅读次数成功
  addReadCount_success(state, action) {
    return produce(state, (proxy) => {
      proxy.index
        .filter((it) => it.rowid === action.data.id)
        .forEach((it) => (it.readcount = action.data.count));
      proxy.blogContentState = false;
    });
  },

  // // 增加阅读次数失败
  addReadCount_failed(state, action) {
    console.log(action.data);
    return produce(state, (proxy) => {
      proxy.blogContentState = false;
    });
  },

  // 文章发布成功
  blogPublish_success(state) {
    return produce(state, (proxy) => {
      proxy.toastState = true;
      proxy.toastMessage = "文章发布成功";
    });
  },

  // 发布失败
  blogPublish_failed(state) {
    return produce(state, (proxy) => {
      proxy.toastState = true;
      proxy.toastMessage = "文章发布失败";
    });
  },
  // 文章内容加载完成
  blogContentLoaded(state) {
    return produce(state, (proxy) => {
      proxy.blogContentState = true;
    });
  },
};

export { reducerFunction };
