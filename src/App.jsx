import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Light Mode");
      
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <>
      <Navbar title="TextUtils" onToggleDarkMode={toggleDarkMode} myStyle={myStyle} toggleStyle={toggleStyle} btnText={btnText}/>
      <TextForm label="Text Converter" myStyle={myStyle}/>
      <About myStyle={myStyle} />
    </>
  );
}

export default App;
