import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, {useState} from 'react'
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

 const ShowAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1400);
  }

  const [mode, setmode] = useState("light")
  
  const toggle=()=>{
    if(mode==='light'){
    setmode("dark");
    document.body.style.backgroundColor='#042743'
    ShowAlert(": Dark mode has been enabled","success");
  }
    else{
      setmode("light");
      document.body.style.backgroundColor='white'
      ShowAlert(": Light mode has been enabled","success");
    }
  }



  return (
    <div>
    <div ></div>
    <Router>
    <Navbar title="ThinkPad 1.0" mode={mode} toggle={toggle}  />
    <Alert alert={alert}/>
  <div className="container my-3" >
      <Routes>
        <Route exact path="/" element={<Textform title="Enter the text here..." ShowAlert={ShowAlert} mode={mode}/>} />
  {/* <Textform title="Enter the text here..." ShowAlert={ShowAlert} mode={mode}/> */}
        <Route exact path="/About" element={ <About mode={mode}/> }/>
      </Routes>
  
  </div>
    </Router>
    </div>
  );
}

export default App;
