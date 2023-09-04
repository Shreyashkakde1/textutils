import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black"

    }else if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#040D12';
      document.body.style.color = "white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-4">
        <TextForm heading="Enter the text to Analyze"></TextForm>
      </div>
    </>
  );
}

export default App;
