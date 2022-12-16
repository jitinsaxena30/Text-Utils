import { useState } from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';






function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert  = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1000);
  }


  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#343A40';
      showAlert("Dark Mode has been enabled", "success");
    }
  }
  
  
  return (
    <>
      <Router>
      <div>
      <Navbar title="Text-Utils" aboutText="About Us" mode = {mode}  toggleMode = {toggleMode} />
      <Alert alert= {alert} />
      <Routes>
          <Route exact path="/about" element = { <AboutUs mode={mode} />}>
           
          </Route>
          <Route exact path="/contact" element = {<ContactUs />}>
            
          </Route>
          <Route exact path="/" element = {<TextForm text="Enter your text to analyse below" mode = {mode} showAlert = {showAlert} />}>
            
          </Route>
        </Routes>
        </div>
        </Router>     
    </>
  );
}

export default App;
