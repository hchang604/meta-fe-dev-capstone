import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <nav id="navbar">
        <img src={logo} />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
        </ul>
    </nav>
    )
}

export default Nav