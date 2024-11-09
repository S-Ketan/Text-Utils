import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle ={toggle}/>
      <TextForm label="Text Converter" mode={mode} />
      <About mode={mode}/>
    </>
  );
}

export default App;
