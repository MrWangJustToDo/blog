import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery";
// 全局state
import store from "./component/redux/globalStore";
// route路由组件
import RouteApp from "./component/routeApp";
// font-awsome的css文件
import "./css/all.min.css";
// typo显示优化
import "./css/typo.css";
// animate的css文件
import "animate.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
          <Route path="/">
            <RouteApp />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
