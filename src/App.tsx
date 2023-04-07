import * as React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

Modal.setAppElement("#root");

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"}  element={<Main/>}/>
          <Route path={"/login"}  element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
