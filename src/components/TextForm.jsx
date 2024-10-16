import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn primary mx-1"
          onClick={handleUpClick}
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn primary mx-1"
          onClick={handleLowerClick}
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn primary mx-1"
          onClick={handleClear}
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Clear
        </button>
        <button
          className="btn btn primary mx-1"
          onClick={handleCopy}
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
