import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, SetMode] = useState(`light`);
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      SetAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === `light`) {
      SetMode(`dark`);
      document.body.style.backgroundColor = `gray`;
      showAlert("Dark mode has been enabled", "success");
    } else {
      SetMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />
        <br />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze "
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
