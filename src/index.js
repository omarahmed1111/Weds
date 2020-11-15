import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    {" "}
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories/:category_id" component={Home} />
        <Route path="/categories" component={Category} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
