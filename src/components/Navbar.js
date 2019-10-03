import React from 'react'

const Navbar = () => (
    <nav>
        <div className="nav-wrapper blue">
            <div className="container">
                <a href="/" className="brand-logo">The Weatherman Can!</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar