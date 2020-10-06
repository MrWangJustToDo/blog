import { call, put, takeLatest } from "redux-saga/effects";
import { yiYanApi, axiosPost } from "../tools/axiosApi";
import { footComponentYiYan } from "./config";

function* yiYanData() {
  try {
    const data = yield call(yiYanApi, footComponentYiYan);
    yield put({ type: "getYiYan_success", data });
  } catch (e) {
    yield put({ type: "getYiYan_failed", data: e.message });
  }
}

function* yiYanSaga() {
  yield takeLatest("getYiYan", yiYanData);
}

function* indexData() {
  try {
    const { code, data } = yield call(axiosPost, "/index");
    if (code === 0) {
      yield put({ type: "getIndex_success", data });
    } else {
      yield put({ type: "getIndex_failed", data });
    }
  } catch (e) {
    yield put({ type: "getIndex_failed", data: e.message });
  }
}

function* indexSaga() {
  yield takeLatest("getIndex", indexData);
}

function* otherData() {
  try {
    const { code, data } = yield call(axiosPost, "/other");
    if (code === 0) {
      yield put({ type: "getOther_success", data });
    } else {
      yield put({ type: "getOther_failed", data });
    }
  } catch (e) {
    yield put({ type: "getOther_failed", data: e.message });
  }
}

function* otherSaga() {
  yield takeLatest("getOther", otherData);
}

function* authorData() {
  try {
    const { code, data } = yield call(axiosPost, "/author");
    if (code === 0) {
      yield put({ type: "getAuthor_success", data });
    } else {
      yield put({ type: "getAuthor_failed", data });
    }
  } catch (e) {
    yield put({ type: "getAuthor_failed", data: e.message });
  }
}

function* authorSaga() {
  yield takeLatest("getAuthor", authorData);
}

function* blogTYpeData() {
  try {
    const { code, data } = yield call(axiosPost, "/types");
    if (code === 0) {
      yield put({ type: "getBlogTypes_success", data });
    } else {
      yield put({ type: "getBlogTypes_failed", data });
    }
  } catch (e) {
    yield put({ type: "getBlogTypes_failed", data: e.message });
  }
}

function* blogTypeSaga() {
  yield takeLatest("getBlogTypes", blogTYpeData);
}

function* blogPublishData(action) {
  try {
    const { code, data } = yield call(axiosPost, "/publish", action.data);
    if (code === 0) {
      yield put({ type: "blogPublish_success", data });
    } else {
      yield put({ type: "blogPublish_failed", data });
    }
  } catch (e) {
    yield put({ type: "blogPublish_failed", data: e.message });
  }
}

function* blogPublishSaga() {
  yield takeLatest("publishBlog", blogPublishData);
}

function* blogMessageData(action) {
  try {
    const { code, data } = yield call(axiosPost, "/getMessage", action.data);
    if (code === 0) {
      yield put({ type: "blogMessage_success", data });
    } else {
      yield put({ type: "blogMessage_failed", data });
    }
  } catch (e) {
    yield put({ type: "blogMessage_failed", data: e.message });
  }
}

function* blogMessageSaga() {
  yield takeLatest("getBlogMessage", blogMessageData);
}

function* blogPrimaryReplayData(action) {
  try {
    const { code, state } = yield call(axiosPost, "/putMessage", action.data);
    if (code === 0) {
      yield put({ type: "putPrimaryReplay_success" });
    } else {
      yield put({ type: "putPrimaryReplay_failed", data: state });
    }
  } catch (e) {
    yield put({ type: "putPrimaryReplay_failed", data: e.message });
  }
}

function* blogPrimaryReplaySaga() {
  yield takeLatest("putPrimaryReplay", blogPrimaryReplayData);
}

function* blogReplayData(action) {
  try {
    const { code, state } = yield call(axiosPost, "/addMessage", action.data);
    if (code === 0) {
      yield put({ type: "addReplay_success" });
    } else {
      yield put({ type: "addReplay_failed", data: state });
    }
  } catch (e) {
    yield put({ type: "addReplay_failed", data: e.message });
  }
}

function* blogReplaySaga() {
  yield takeLatest("addReplay", blogReplayData);
}

function* addReadCountData(action) {
  try {
    yield call(axiosPost, "/addReadcount", action.data);
    yield put({ type: "addReadCount_success", data: action.data });
  } catch (e) {
    yield put({ type: "addReadCount_failed", data: e.message });
  }
}

function* addReadCountSaga() {
  yield takeLatest("addReadcount", addReadCountData);
}

export {
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
};
