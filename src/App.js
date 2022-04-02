import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Homepage from "./pages/Homepage";
import MyProjects from "./pages/MyProjects";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ayakor" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="*" element={<Homepage />} />
        

      </Routes>
     </BrowserRouter>
  );
};

export default App;
