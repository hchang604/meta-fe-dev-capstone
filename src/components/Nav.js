import React from 'react'
import logo from '../assets/Logo.svg'

const Nav = () => {
    return (
    <nav id="navbar">
        <img src={logo} />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
    )
}

export default Nav