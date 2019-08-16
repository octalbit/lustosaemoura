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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                    </p>  
                    <Link className="button lm-btn" href="#">Como posso ajudar?</Link>
                </div>                
            </div>
        </header>
    )
} 