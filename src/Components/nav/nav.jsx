import React from 'react'
import IMG from "../../assests/Zeno-White.png"
import './nav.css'

const nav = () => {
  return (
    <nav>
        <div className="navContainer">
            <div className="navImg">
                <img src={IMG} alt="img" />
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Inventory</li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default nav