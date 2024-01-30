import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.png'

function NavItems() {
    const [toggleMenu, settoggleMenu] = useState(false);
    const [socailToggle, setSocailToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false)

    // addevent listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else
            setHeaderFixed(false);
    }
    )
    return (

        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* header-top */}
            <div className={`header-top d-md-none ${socailToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            {/* header-Bottom */}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* Logo */}
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>

                        {/* Menu-items */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${toggleMenu ? "active" : ""}`}>
                                    <li><NavLink className={({ isActive }) => `${isActive ? "text-primary" : ""}`} to="/">Home</NavLink></li>
                                    <li><NavLink className={({ isActive }) => `${isActive ? "text-primary" : ""}`} to="/shop">Shop</NavLink></li>
                                    <li><NavLink className={({ isActive }) => `${isActive ? "text-primary" : ""}`} to="/blog">Blog</NavLink></li>
                                    <li><NavLink className={({ isActive }) => `${isActive ? "text-primary" : ""}`} to="/about">About</NavLink></li>
                                    <li><NavLink className={({ isActive }) => `${isActive ? "text-primary" : ""}`} to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>

                            {/* signin and log in */}
                            <Link to="/signin" className='lab-btn me-3 d-none d-md-block '>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Log In</Link>

                            {/* Menu-toggler */}
                            <div className={`header-bar d-lg-none ${toggleMenu ? "active" : ""}`} onClick={() => settoggleMenu(!toggleMenu)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* Social-toggler */}
                            <div className="ellepsis-bar d-md-none" onClick={() => setSocailToggle(!socailToggle)}>

                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default NavItems