import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../styles/navbar.css"




const Navbar = () => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop"> My shopping</span>
            <div className="cart">
                <span>
        <FaShoppingCart/>
                </span>
                <span>0</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar