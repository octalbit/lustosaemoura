import React from 'react'
import './SectionAbout.css'

import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle'

export default function SectionAbout() {
    return (
        <section className="lm-about">
            <SectionTitle text="Quem nós somos" />
            <div className="container">
                <div className="lm-content-about">
                    <h3>Somos à  Lustosa e Moura — Advocacia e Consultoria Jurídica.</h3>
                    <p>LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é um escritório de advocacia localizado em Amarante - PI e Regeneração - PI, atuante nas áreas do direito civil, consumidor, trabalhista, tributário e previdenciário, oferecendo toda a assistência e consultoria jurídica para seus clientes.</p>
                    <Link className="lm-btn" to="/sobre">Veja mais</Link>
                </div>
            </div>
        </section>
    )
}
