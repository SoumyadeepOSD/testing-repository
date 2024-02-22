import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Latest from "./pages/Latest.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/latest" element={<Latest/>}/>
    </Routes>
  );
}

export default App