import "./App.css";
import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="ui container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login onFormSwitch={() => {}} />} />
          <Route
            path="/register"
            element={<Register onFormSwitch={() => {}} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
