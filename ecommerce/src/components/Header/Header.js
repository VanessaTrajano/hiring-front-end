import React from "react"
import Home from "../../pages/Home"
import Shopping from "../../pages/Shopping"

import {
    Link, 
    Routes, 
    Route
  } from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <nav>
                <ul>                 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cart" element={<Shopping/>}/>
            </Routes>
        </div>
    )
}