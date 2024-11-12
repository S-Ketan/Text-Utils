import React, { useState } from "react";

export default function TextForm(props) {
  document.title = "Textutils - Home";
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    console.log("Handle up button was clicked");
    const newText = text.toUpperCase();
    setText(newText);
    text.length > 0 ? props.showAlert("Text has been converted to UPPERCASE", "success") : props.showAlert("Please enter some text", "error");
  };
  const handleLoClick = () => {
    console.log("Handle Low button was clicked");
    const newText = text.toLowerCase();
    setText(newText);
    text.length > 0 ? props.showAlert("Text has been converted to lowercase", "success") : props.showAlert("Please enter some text", "error");
  };
  const handleOnChange = (event) => {
    console.log("On Changge Clicked");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    console.log("Clear text clicked");
    const newText = "";
    setText(newText);
    text.length > 0 ? props.showAlert("Text has been cleared", "success") : props.showAlert("Please enter some text", "error");
  };
  const handleCamelCaseClick = (str) => {
    console.log("CamelCase Clicked");
    str = text;
    const words = str
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(" ");
    const camelCase = words
      .map((word, index) => {
        if (index == 0) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join("");
    setText(camelCase);
    text.length > 0 ? props.showAlert("Text has been converted to camelCase", "success") : props.showAlert("Please enter some text", "error"); 
  };
  const handlePascalCaseClick = () => {
    console.log("PascalCase Clicked");
    const words = text
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(" ");
    const pascalCase = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
    setText(pascalCase);
    text.length > 0 ? props.showAlert("Text has been converted to PascalCase", "success") : props.showAlert("Please enter some text", "error"); 
  };
  const handleInverseCaseClick = () => {
    console.log("InverseCase Clicked");
    const words = text.replace(/[^\w\s]/g, "").split(" ");
    const inverseCase = words.map((word) => {
      const charArray = word.split("");
   const invertedChar=  charArray.map((element) => {
        if (element == element.toUpperCase()) {
          return element.toLowerCase();
        } else if (element == element.toLowerCase()) {  
          return element.toUpperCase();
        }
      });
      return invertedChar.join('');
    }).join(' ');
    setText(inverseCase); 
    text.length > 0 ? props.showAlert("Text has been converted to InverseCase", "success") : props.showAlert("Please enter some text", "error");  
  };

  return (
    <div className={`m-5 ${props.mode==="dark" ? 'bg-gray-800 text-white':''}`}>
      <div>
        <div className="flex flex-col gap-3">
          <label htmlFor="myBox" className={`text-3xl p-5 ${props.mode==='dark' ? 'bg-gray-800':'bg-gray-400 '}`}>
            {props.label}
          </label>
          <textarea
            name="myBox"
            id="myBox"
            className={`p-5 ${props.mode==="dark" ? 'bg-gray-500 text-white':''}`}
            rows={5}
            onChange={handleOnChange}
            value={text}
          ></textarea>

          <div className="flex flex-wrap gap-3">
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handleUpClick}
            >
              Change to UPPERCASE
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handleLoClick}
            >
              Change to lowercase
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handleCamelCaseClick}
            >
              Change to camelCase
            </button>
           {/*  <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handlePascalCaseClick}
            >
              Change to PascalCase
            </button> */}
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl"
              onClick={handleInverseCaseClick}
            >
              Change to InverseCase
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-4xl p-3">Words and Character counter</p>
        <div className="border-black border rounded-xl p-5 box-border mt-3">
          <p> Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
          <p> Characters : {text.length}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-4xl p-3">Preview</p>
        <p className="overflow-auto h-36 border border-black p-5 rounded-xl mt-3">{text.length>0?text : 'Enter something to preview it here'}</p>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  label: "Enter a label here",
};
