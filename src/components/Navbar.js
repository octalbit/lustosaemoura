import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';

import Brand from '../assets/img/brand.png'

import NavbarInfo from './NavbarInfo'
import Toggle from './Toggle';

export default function Navbar() {
    return (
        <>
            <NavbarInfo />
            <nav className="lm-navbar">
                <div className="container">
                    <div className="lm-navbar-content">
                        <div className="lm-navbar-brand">
                            <Link className="navbar-item" to="/"><img src={Brand} alt="Lustosa e Moura" /></Link>
                        </div>
                        <div className="lm-menu">
                                <Link className="navbar-item" to="/">Home</Link>
                                <Link className="navbar-item" to="/sobre">Sobre</Link>
                                <Link className="navbar-item" to="/area-de-atuacao">Áreas de atuação</Link>
                                <Link className="navbar-item" to="/advogados">Advogados</Link>
                                <Link className="navbar-item" to="/noticias">Notícias</Link>
                                <Link className="navbar-item" to="/contatos">Contatos</Link>
                        </div>
                        <Toggle />
                    </div>
                </div>
            </nav>
        </>
    )
}
