// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import Amazon from './components/Amazon';
import { Cart } from './components/Cart';
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
  
const handleChange = (item,d) =>{
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d
  if(arr[ind].amount===0) arr[ind].amount=1;
  setCart([...arr]);

}


  return (
  <React.Fragment>
    <Navbar setShow = {setShow} size= {Cart.length} />
    {show ? <Amazon/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
    <Amazon handleClick={handleClick} />


  </React.Fragment>
    
  );
}

export default App;
