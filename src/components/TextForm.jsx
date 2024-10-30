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
  const HandleOnChange = (event) => {
    console.log("On Changge Clicked");
    setText(event.target.value);
  };

  return (
    <div className="m-5">
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
            onChange={HandleOnChange}
            value={text}
          ></textarea>

          <div className="flex gap-3">
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleUpClick}
              id="UpButton"
            >
              Change to UpperCase
            </button>
            <button
              className="border border-black text-white bg-blue-400 w-fit p-2 rounded-2xl "
              onClick={handleLoClick}
              id="UpButton"
            >
              Change to LowerCase
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
    </div>
  );
}

TextForm.defaultProps = {
  label: "Enter a label here",
};
