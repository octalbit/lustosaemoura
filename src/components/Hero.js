import React from 'react'
import './Hero.css'

import { Link } from 'react-router-dom';

import Icon from '../assets/img/libra.svg'

export default function Hero() {
    return (
        <header className="hero lm-hero-bg">
            <div className="hero-body">
                <div className="container lm-box-hero">
                    <img className="img-title" src={Icon} alt="Lustosa e Moura" />
                    <h1 className="title">
                        Bem-vindo à Lustosa e Moura
                    </h1>
                    <p className="subtitle">
                    Somos focados na excelência do atendimento a cada cliente, proporcionando-lhe o conforto de estar sempre bem informado de suas causas e seguro de que a estas os sócios lhe emprestam alta competência técnica, desenvolvendo estratégias específicas, bem como atuam dentro de rigorosa ética.
                    </p>
                    <Link className="button lm-btn" to="/contatos">Como posso ajudar?</Link>
                </div>
            </div>
        </header>
    )
}
