import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase ", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared message ", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copyed ", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode == `dark` ? `white` : `black`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode == `dark` ? `gray` : `white`,
              color: props.mode == `dark` ? `white` : `black`,
            }}
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
      <div
        className="container my-3"
        style={{
          color: props.mode == `dark` ? `white` : `black`,
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in input "}</p>
      </div>
    </>
  );
}
