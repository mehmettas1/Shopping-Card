// import React, { useEffect, useState } from 'react';
import React from 'react';
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
  <React.Fragment>
    <Navbar/>
    <Amazon/>

  </React.Fragment>
    
  );
}

export default App;
