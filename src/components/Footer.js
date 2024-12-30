import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
    return (
        <footer id="footer">
            <img src={logo} />
            <section id="contact">
                <h3>Contact</h3>
                <p>1111 ABC Street, Chicago, Illinois - 11111</p>

                <p>111-111-1111</p>

                <p>contact@littlelemon.com</p>
            </section>
        </footer>
    )
}

export default Footer