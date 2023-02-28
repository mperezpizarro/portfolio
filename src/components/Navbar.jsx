import { useRef } from 'react'
import './Navbar.css'
import logo from '/logo_h_color.png'
import { Menu, X } from 'react-feather'
import { i18nNavbar } from '../consts/i18n'

const Navbar = ({ lang = "es" }) => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.add('showed')
    }

    const hideMenu = () => {
        menuRef.current.classList.remove('showed')
    }

    return (
        <div className="navbar-container">
            <div className='navbar-wrapper'>
                <div className="logo"><a href="#"><img src={logo} alt="Logo personal" /></a></div>
                <nav>
                    <ul>
                        <li><a href="#experiencia">{ i18nNavbar[lang].links[0] }</a></li>
                        <li><a href="#proyectos">{ i18nNavbar[lang].links[1] }</a></li>
                        <li><a href="#tecnologías">{ i18nNavbar[lang].links[2] }</a></li>
                        <li>
                            <a href={lang === "es" ? "/en" : "/"}>
                                { lang === "es" ? "🇺🇸" : "🇪🇸" }
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="mobile-menu">
                    <button onClick={showMenu}><Menu /></button>
                    <ul className='mobile-links' ref={menuRef}>
                        <button onClick={hideMenu}><X /></button>
                        <li><a href="#experiencia" onClick={hideMenu}>{ i18nNavbar[lang].links[0] }</a></li>
                        <li><a href="#proyectos" onClick={hideMenu}>{ i18nNavbar[lang].links[1] }</a></li>
                        <li><a href="#tecnologías" onClick={hideMenu}>{ i18nNavbar[lang].links[2] }</a></li>
                        <li>
                            <a href={lang === "es" ? "/en" : "/"}>
                                { lang === "es" ? "🇺🇸" : "🇪🇸" }
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar