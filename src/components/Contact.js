import React from 'react';
import './Contact.css';
// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import FormSendEmail from './FormSendEmail'
import Logo from '../assets/img/logo.svg';

export default function Contact() {
    return (
        <section classname="lm-contact">
            <SectionTitle text="Solicite uma consulta" />
            <div className="container">
                <FormSendEmail />
                <div className="columns">
                    <div className="lm-brand-contact">
                        <img src={Logo} alt="Lustosa e Moura" />
                    </div>
                </div>
            </div>
        </section>
    ) 
}