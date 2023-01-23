import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="header__wrapper__left">
                    <NavLink to="/" className={({ isActive }) => isActive ? "logo" : "logo"} >Notary</NavLink>
                </div>
                <div className="header__wrapper__right">
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : "link"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : "link"} to="/add">Add</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar