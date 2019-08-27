import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';

import Brand from '../assets/img/brand.png'

import NavbarInfo from './NavbarInfo'

export default function Navbar() {
    return (
        <>
            <NavbarInfo />
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/"><img src={Brand} alt="Lustosa e Moura" /></Link>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end lm-menu">
                            <Link className="navbar-item"  to="/">Home</Link>
                            <Link className="navbar-item" to="/sobre">Sobre</Link>
                            <Link className="navbar-item" to="/area-de-atuacao">Áreas de atuação</Link>
                            <Link className="navbar-item" to="/advogados">Advogados</Link>
                            <Link className="navbar-item" to="/noticias">Notícias</Link>
                            <Link className="navbar-item" to="/contatos">Contatos</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
