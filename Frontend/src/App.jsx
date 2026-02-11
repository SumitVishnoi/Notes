import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </div>
  );
}

export default App;
