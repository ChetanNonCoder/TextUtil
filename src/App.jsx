import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      <br />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze " />
      </div>
      <About />
    </>
  );
}

export default App;
