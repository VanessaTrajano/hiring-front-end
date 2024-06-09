import React from "react"
import {
    Link, 
    Routes, 
    Route
} from 'react-router-dom'

import Home from "../../pages/Home"
import Shopping from "../../pages/Shopping"

import { List, ListItem, NavigationBar } from "./HeaderStyle"

export default function Header(){
    return(
        <div>
            <NavigationBar>
                <h1>Shopping Store</h1>
                <List>                 
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="cart">Cart</Link></ListItem>
                </List>
            </NavigationBar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cart" element={<Shopping/>}/>
            </Routes>
        </div>
    )
}