import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import { Login } from "./components/auth/Login";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Signup } from "./components/auth/Signup";

const currentUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

function App() {
  return (
    <Router>
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
          <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
  );
}

export default App;
