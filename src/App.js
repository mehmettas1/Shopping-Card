// import React, { useEffect, useState } from 'react';
import './App.css';
import Amazon from './components/Amazon';
import Navbar from './components/Navbar';

function App() {
  // const [first, setfirst] = useState()
  // useEffect(() => {
    
  
  //   return () => {
    
  //   }
  // }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <Amazon/>
    </div>
  );
}

export default App;
