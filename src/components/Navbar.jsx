import React, { useRef } from 'react'
import './Navbar.css'
import logo from '/logo_h_color.png'
import { Menu, X } from 'react-feather'

const Navbar = () => {  
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.add('showed')
    }

    const hideMenu = () => {
        menuRef.current.classList.remove('showed')
    }
    
    return (
        <div className="navbar-container">
            <div className="logo"><a href="#"><img src={logo} alt="Logo personal" /></a></div>
            <nav>
                <ul>
                    <li><a href="#experiencia">experiencia</a></li>
                    <li><a href="#proyectos">proyectos</a></li>
                    <li><a href="#tecnologías">tecnologías</a></li>
                </ul>
            </nav>
            <div className="mobile-menu">
                <button onClick={showMenu}><Menu /></button>
                <ul className='mobile-links' ref={menuRef}>
                    <button onClick={hideMenu}><X /></button>
                    <li><a href="#experiencia" onClick={hideMenu}>experiencia</a></li>
                    <li><a href="#proyectos" onClick={hideMenu}>proyectos</a></li>
                    <li><a href="#tecnologías" onClick={hideMenu}>tecnologías</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar