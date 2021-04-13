import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import LoginLayout from "layouts/Login/Login.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" render={(props) => <LoginLayout {...props} />} />
      <Redirect from="/" to="/admin/Alarm" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
