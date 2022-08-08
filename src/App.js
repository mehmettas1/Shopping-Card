// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import Amazon from './components/Amazon';
import Navbar from './components/Navbar';

function App() {
  // const [first, setfirst] = useState()
  // useEffect(() => {
    
  
  //   return () => {
    
  //   }
  // }, [])
  
const [show, setShow] = useState(true);
const [cart, setCart] = useState([]);

const handleClick = (item)=>{
  if(cart.indexOf(item)!==-1)
  return;
  setCart([...cart,item])
}
  


  return (
  <React.Fragment>
    <Navbar/>
    <Amazon handleClick={handleClick} />

  </React.Fragment>
    
  );
}

export default App;
