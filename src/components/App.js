import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "../styles/home.module.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
