import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Head from "./head/headContainer";
import Foot from "./foot/footContainer";
import IndexBody from "./indexBody/indexBodyContainer";
import BlogBody from "./blogBody/blogBodyContainer";
import TypeBody from "./typeBody/typeBodyContainer";
import ArchiveBody from "./archiveBody/archiveBodyContainer";
import AboutBody from "./aboutBody/aboutBodyContainer";
import Login from "./login/loginContainer";
import AdminBody from "./adminBody/adminBodyContainer";
import Notfound from "./404/notfound";
import ComponentLoadAndRender from "./tools/componentLoadAndRender";

export default () => {
  let dispatch = useDispatch();
  let { isLogin } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "autoLogin" });
  }, [dispatch]);
  return (
    <Switch>
      <Route path="/mrwangLogin">
        <Login />
      </Route>
      <Route path="/">
        <Head />
        <Switch>
          <Route path="/index">
            <IndexBody />
          </Route>
          <Route path="/type">
            <TypeBody />
          </Route>
          <Route path="/archive">
            <ArchiveBody />
          </Route>
          <Route path="/about">
            <AboutBody />
          </Route>
          <Route path="/blog/:id">
            <BlogBody />
          </Route>
          <Route path="/admin">
            <ComponentLoadAndRender
              noborder
              judge={() => isLogin}
              map={() => <AdminBody />}
              nothing={() => <Notfound />}
            />
          </Route>
          <Route path="/">
            <div className="container my-4">
              <Notfound />
            </div>
          </Route>
        </Switch>
        <Foot />
      </Route>
    </Switch>
  );
};
