import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Contact.css';
// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
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
                <form className="lm-form-contact" onSubmit={handleSubmit}>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input lm-form-input" 
                                        type="text" 
                                        placeholder="Nome"
                                        value={name} 
                                        onChange={name => setName(name.target.value)} 
                                        required
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input lm-form-input" 
                                        type="email" 
                                        placeholder="Email"
                                        value={email} 
                                        onChange={email => setEmail(email.target.value)} 
                                        required
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input lm-form-input" 
                                        type="tel" 
                                        placeholder="Telefone"
                                        value={telefone} 
                                        onChange={telefone => setTelefone(telefone.target.value)}
                                        required
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                        <Select
                                            className="lm-form-select"
                                            name="area-de-atuacao"
                                            value={areaAtuacao}
                                            options={options}
                                            searchable={false}
                                            onChange={event => setareaAtuacao(event)}
                                            required
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <textarea 
                                        className="textarea lm-form-textarea" 
                                        placeholder="Menssagem"
                                        value={message} 
                                        onChange={msg => setMessage(msg.target.value)}
                                        required
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="control lm-control-box">
                            <button className="button is-link lm-btn-form" type='submit'>Enviar pedido</button>
                        </div>
                    </div>
                    
                </form>
                <div className="columns">
                    <div className="lm-brand-contact">
                        <img src={Logo} alt="Lustosa e Moura" />
                    </div>
                </div>
            </div>
        </section>
    ) 
}