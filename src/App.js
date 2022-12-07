import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import N1view from "./Components/N1view";
import N2view from "./Components/N2view";
import N3view from "./Components/N3view";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Layout /> */}
        <Routes>
          <Route path="/" element={<div>Wow</div>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/n1View" element={<N1view />} />
          <Route path="/n2View" element={<N2view />} />
          <Route path="/n3View" element={<N3view />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
