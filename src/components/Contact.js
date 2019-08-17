import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Contact.css';
// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import FormSendEmail from './FormSendEmail'
import Logo from '../assets/img/logo.svg';

export default function Contact() {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [areaAtuacao, setareaAtuacao] = useState('');
    const [message, setMessage] = useState('');  
    
    function handleSubmit(event) {
      if(email === '' || name === '' || telefone === '' || areaAtuacao === '' || message === ''){
          alert('Preencha todos os campos ');
      }
      axios.post('https://calm-hamlet-35252.herokuapp.com/email', {
        name,  
        message,
        telefone,
        email,
        areaAtuacao
      })
      alert('Mensagem enviada com sucesso !' );
      event.preventDefault();
    };
    
    const options = [
        'Direito Empresarial',
        'Direito da Familia',
        'Direito Cívil',
        'Direito do Trabalho',
        'Direito Imobiliário',
        'Direito Tributário',
        'Direito Administrativo'
    ];

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