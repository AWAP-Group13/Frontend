import React from "react";
import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";
import Mainview from "./Components/Mainview";
import Signup from "./Components/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout";
import N1view from "./Components/N1view";
import N2view from "./Components/N2view";
import N3view from "./Components/N3view";




function App() {
  return (
    <div className="App">
      <Header/>
      <Mainview/>
      
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<Layout/>} />
          <Route path="Signup" element={<Signup/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="N1View" element={<N1view/>} />
          <Route path="N2View" element={<N2view/>} />
          <Route path="N3View" element={<N3view/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
