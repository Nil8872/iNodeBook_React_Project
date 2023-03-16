import "./App.css";
import React from "react";
import Home from "./Componet/Home";
import Navbar from "./Componet/Navbar";
import About from "./Componet/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/NoteState";

function App() {
  return (
    <NoteState>
    <Router>
      <div className=" ">
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/notes" element={<Notes />} /> */}
        </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
