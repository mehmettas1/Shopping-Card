import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../styles/navbar.css"




const Navbar = ({setShow,size}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}> <button>My shopping</button></span>
            <div className="cart"onClick={()=>setShow(false)}>
                <span>
        <FaShoppingCart className="icon"/>
                </span>
                <span className="size">{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar