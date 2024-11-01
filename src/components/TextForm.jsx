import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    console.log("Handle up button was clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Handle Low button was clicked");
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Changge Clicked");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    console.log("Clear text clicked");
    const newText = "";
    setText(newText);
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
  };

  return (
    <div className="m-5" style={props.myStyle}>
      <div>
        <div className="flex flex-col gap-3">
          <label htmlFor="myBox" className="text-3xl bg-gray-400 p-5">
            {props.label}
          </label>
          <textarea
            name="myBox"
            id="myBox"
            className="border-2 p-5"
            rows={5}
            onChange={handleOnChange}
            value={text}
          ></textarea>

          <div className="flex gap-3">
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleUpClick}
            >
              Change to UPPERCASE
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleLoClick}
            >
              Change to lowercase
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleCamelCaseClick}
            >
              Change to camelCase
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handlePascalCaseClick}
            >
              Change to PascalCase
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleInverseCaseClick}
            >
              Change to InverseCase
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-4xl">Words and Character counter</p>
        <div className="border-black border rounded-xl p-5 box-border mt-3">
          <p> Words: {text.split(" ").length} </p>
          <p> Characters : {text.length}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-4xl">Preview</p>
        <p className="overflow-auto h-36 border border-black p-5 rounded-xl mt-3">{text}</p>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  label: "Enter a label here",
};
