import React from "react";
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

export default () => {
  return (
    <Switch>
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
            <AdminBody />
          </Route>
          <Route path="/login">
            <Login />
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
