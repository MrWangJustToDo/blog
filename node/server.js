const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const svgCaptcha = require("svg-captcha");
const session = require("express-session");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
// const cors = require("cors");
const path = require("path");
const { getImgs } = require("./api");

// 基础端口
const port = 10010;

// 创建数据库连接
var db;

// 创建服务器
let app = express();

// // 配置跨域
// app.use(
//   cors({
//     maxAge: 86400,
//     origin: "*",
//   })
// );

// 绑定数据库文件
app.use(async (req, rex, next) => {
  if (!db) {
    db = await sqlite.open({
      filename: "./server",
      driver: sqlite3.Database,
    });
  }
  next();
});

// 解码URL
app.use((req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

// 配置json解析
app.use(express.json({ limit: "5mb" }));
// 解析表单
app.use(express.urlencoded({ extended: true }));
// 配置cookie
app.use(cookieParser("mrwangjusttodo"));
// 配置session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

// 生成session
app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {};
  }
  next();
});

// 打印请求
app.use((req, res, next) => {
  console.log(`使用${req.method}方法请求 ${req.url}`);
  next();
});

// app.use(express.static("../build"));

// 获取登录对象
app.use(async (req, res, next) => {
  // 从签名cookie中找出该用户的信息并挂在req对象上以供后续的中间件访问
  if (req.signedCookies.id) {
    req.user = await db.get(
      "SELECT rowid, * FROM users WHERE rowid = ?",
      req.signedCookies.id
    );
  }
  next();
});

// 获取验证码
app.get("/captcha", (req, res) => {
  let captcha = svgCaptcha.create({
    noise: 3,
    background: "#ffffff",
  });
  req.session.captcha = captcha.text;
  res.type("svg");
  res.send(captcha.data);
});

// 响应验证码明文,用于调试
app.get("/captcha/str", (req, res) => {
  res.json({ code: 0, state: req.session.captcha });
});

// 判断是否能够自动登录
app.post("/autoLogin", async (req, res) => {
  if (req.user) {
    res.json({ code: 0, state: "自动登录成功", data: req.user.username });
  } else {
    res.json({ code: -1, state: "fail" });
  }
});

// 登录
app.post("/login", async (req, res) => {
  try {
    let user = await db.get(
      "SELECT rowid as id, * FROM users WHERE username = ? AND password = ?",
      req.body.username,
      req.body.password
    );
    if (user) {
      res.cookie("id", user.id, {
        maxAge: 8640000,
        signed: true,
      });
      res.json({ code: 0, state: "登录成功", data: user.username });
    } else {
      res.json({ code: -1, state: "登录失败", data: "用户信息验证失败" });
    }
  } catch (e) {
    console.log("/login方法失败", e);
    res.json({ code: -1, state: "登录失败", data: e });
  }
});

// 登出
app.post("/logout", (req, res, next) => {
  res.clearCookie("id");
  res.json({ code: 0, state: "登出成功" });
});

/*
CREATE TABLE blogs(
  title string not null unique,
  content string not null,
  created string not null,
  readcount int not null default 0,
  modify string not null,
  type string not null,
  commend int not null default 0,
  message int not null default 0,
  flag string not null,
  award int not null default 1,
  link string not null);
*/

// 获取index博客信息
app.post("/index", async (req, res) => {
  try {
    let data = await db.all("SELECT rowid, * FROM blogs ORDER BY rowid DESC");
    res.json({ code: 0, state: "success", data });
  } catch (e) {
    console.log("/index出现错误", e);
    res.json({ code: -1, state: e, data: [] });
  }
});

// 获取总的博客的条数
app.post("/total", async (req, res) => {
  try {
    let data = await db.get("SELECT COUNT(*) as total FROM blogs");
    res.json({
      code: 0,
      state: "success",
      data,
    });
  } catch (e) {
    console.log("/total出现错误", e);
    res.json({ code: -1, state: e, data: { total: 0 } });
  }
});

// 获取所有的分类
app.post("/types", async (req, res) => {
  try {
    let data = await db.all(
      "SELECT typename, blogcount FROM types ORDER BY blogcount DESC"
    );
    res.json({
      code: 0,
      state: "success",
      data,
    });
  } catch (e) {
    console.log("/types出现错误", e);
    res.json({ code: -1, state: e, data: [] });
  }
});

app.post("/imgs", async (req, res) => {
  let data = await getImgs(0, 7);
  res.json(data);
});

// 获取所有的other项目
app.post("/other", async (req, res) => {
  try {
    let data = await db.all("SELECT * FROM other");
    res.json({ code: 0, state: "success", data });
  } catch (e) {
    console.log("/other出现错误", e);
    res.json({ code: -1, state: e, data: [] });
  }
});

// 获取author的qq与email
app.post("/author", async (req, res) => {
  try {
    let data = await db.get("SELECT rowid, * FROM USERS WHERE rowid = 1");
    res.json({ code: 0, state: "success", data });
  } catch (e) {
    console.log("/author出现错误", e);
    res.json({ code: -1, state: e, data: {} });
  }
});

/*
CREATE TABLE blogs(
  title string not null unique,
  content string not null,
  created string not null,
  readcount int not null default 0,
  modify string not null,
  type string not null,
  commend int not null default 0,
  message int not null default 0,
  flag string not null,
  award int not null default 1,
  link string not null);
*/
// 发布新博客
app.post("/publish", async (req, res) => {
  if (req.user) {
    // 获取对象加工。。。
    let data = req.body;
    if (!data["blog-link"]) {
      let { images } = await getImgs(0, 7);
      let { url } = images[(Math.random() * 7) | 0];
      data["blog-link"] = `https://cn.bing.com${url}`;
    }
    try {
      await db.run(
        "INSERT INTO blogs VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        data["blog-title"],
        data["blog-content"],
        data["blog-create"] || new Date().toLocaleString(),
        0,
        new Date().toLocaleString(),
        data["blog-type"],
        data["blog-add"].includes("推荐") ? 1 : 0,
        data["blog-add"].includes("评论") ? 1 : 0,
        data["blog-tag"],
        data["blog-add"].includes("赞赏") ? 1 : 0,
        data["blog-link"]
      );
      await db.run(
        "UPDATE types SET blogcount = ? WHERE typename = ? ",
        data["blog-type-count"],
        data["blog-type"]
      );
      res.json({ code: 0, state: "success" });
    } catch (e) {
      console.log("/publish出现错误", e);
      res.json({ code: -1, state: e });
    }
  } else {
    console.log("用户信息过期");
    res.json({ code: -1, state: e });
  }
});
// 获取博客留言信息
app.post("/getMessage", async (req, res) => {
  // 获取要查找的文章id
  let { id } = req.body;
  try {
    let data = await db.all("SELECT * FROM message WHERE blogid = ?", id);
    data.sort((o1, o2) => (o2.primaryid - o1.primaryid > 0 ? 1 : -1));
    res.json({ code: 0, state: "success", data });
  } catch (e) {
    console.log("/message出现错误", e);
    res.json({ code: -1, state: e, data: {} });
  }
});
// 发布按钮点击的提交,每次都会创建新的评论
app.post("/putMessage", async (req, res) => {
  // 验证码判断
  if (req.session.captcha == req.body.checkcode) {
    // 获取评论者ip
    let [ip] = /\d+\.\d+\.\d+\.\d+/.exec(req.ip);
    try {
      await db.run(
        "INSERT INTO message VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        req.body.id,
        1,
        req.body.primaryid || 0,
        req.body.isauthor ? 1 : 0,
        ip,
        req.body.content,
        req.body.create || new Date().toLocaleString(),
        "[]"
      );
      res.json({ code: 0, state: "success" });
    } catch (e) {
      console.log("/putMessage出现错误", e);
      res.json({ code: -1, state: e });
    }
  } else {
    res.json({ code: -1, state: "验证码错误" });
  }
});
// 回复评论的提交
app.post("/addMessage", async (req, res) => {
  // 验证码验证
  if (req.session.captcha === req.body.checkcode) {
    // 获取评论者ip
    let [ip] = /\d+\.\d+\.\d+\.\d+/.exec(req.ip);
    // 获取主评论id
    let primaryid = req.body.primaryid;
    // 获取文章id
    let blogid = req.body.blogid;
    // 构建本次child对象
    let last = req.body.last;
    let current = req.body.current;
    current["fromip"] = ip;
    last.push(current);
    try {
      await db.run(
        "UPDATE message SET children = ? WHERE primaryid = ? AND blogid = ?",
        JSON.stringify(last),
        primaryid,
        blogid
      );
      res.json({ code: 0, state: "success" });
    } catch (e) {
      console.log("/addMessage出现问题", e);
      res.json({ code: -1, state: e });
    }
  } else {
    res.json({ code: -1, state: "验证码错误" });
  }
});
// 更新阅读量
app.post("/addReadcount", async (req, res) => {
  // 获取要查找的文章id
  let { id } = req.body;
  try {
    // 获取当前博客的阅读次数
    let { readcount } = await db.get(
      "SELECT readcount FROM blogs WHERE rowid = ?",
      id
    );
    await db.run(
      "UPDATE blogs SET readcount = ? WHERE rowid = ?",
      +readcount + 1,
      id
    );
    res.json({ code: 0, state: "success", data: +readcount + 1 });
  } catch (e) {
    console.log("/addMessage出现问题", e);
    res.json({ code: -1, state: e });
  }
});

// 前端路由返回数据
// app.get("/*", async (req, res) => {
//   await res.sendFile(path.resolve("../build", "index.html"));
// });

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

/*
CREATE TABLE users(
  username string not null unique,
  password string not null,
  avatar string not null,
  qq string not null,
  email string not null,
  wechat string not null);
CREATE TABLE blogs(
  title string not null unique,
  content string not null,
  created string not null,
  readcount int not null default 0,
  modify string not null,
  type string not null,
  commend int not null default 0,
  message int not null default 0,
  flag string not null,
  award int not null default 1,
  link string not null);
CREATE TABLE message(
  blogid int not null,
  isprimaryint not null,
  primaryid int not null,
  isauthor int not null,
  fromip string,
  content string not null,
  created string not null,
  children string);
CREATE TABLE types(
  typename string not null,
  blogcount int not null);
*/
