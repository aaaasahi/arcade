import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Router } from "./Router"
import { Header } from "./components/Header/Header";

const currentUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
