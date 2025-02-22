import Alert from "./new/Alert.js";
import Navbar from "./Navbar.js"
import About from "./new/About";
// import PropsTypes from 'prop-types'
// import React,[useState] from "react";

// import CharacterCounter from "./new/Textcounter.mjs";
import Textform from "./new/Textform.js"
import { useState } from "react";
// import Areafinder from "./Areafinder.mjs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [dark, setdark] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message,type) =>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  } 

  const useDark = () => {
    if (dark === 'dark') {
      setdark('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
    else {
      setdark('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled','success')
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={dark} useDark={useDark} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={dark} useDark={useDark} alert={alert} />} />
          <Route exact path="/" element={<Textform  showAlert={showAlert} mode={dark} useDark={useDark} alert={alert} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
