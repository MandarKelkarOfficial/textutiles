import React, { useState } from "react";

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("black");
  
  const toggleMode = () => {
    if (mode === "light" && textMode === "black") {
      setMode("dark");
      setTextMode("white");
    } else {
      setMode("light");
      setTextMode("black");
    }
  };
  

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter The Text To Analysis" mode={mode} toggleMode={toggleMode} textMode={textMode} />
      {/* <About/> */}
    </>
  );
}

export default App;
