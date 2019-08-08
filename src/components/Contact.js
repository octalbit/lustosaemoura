import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle'

export default function Contact() {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [areaAtuacao, setareaAtuacao] = useState('');
    const [message, setMessage] = useState('');  
    
    function handleSubmit(event) {
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
                <form onSubmit={handleSubmit}>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        placeholder="Nome"
                                        value={name} 
                                        onChange={name => setName(name.target.value)} 
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        placeholder="Email"
                                        value={email} 
                                        onChange={email => setEmail(email.target.value)} 
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
                                        className="input" 
                                        type="text" 
                                        placeholder="Telefone"
                                        value={telefone} 
                                        onChange={telefone => setTelefone(telefone.target.value)}
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <div className="select">
                                        <Select
                                            name="area-de-atuacao"
                                            value={areaAtuacao}
                                            options={options}
                                            searchable={false}
                                            onChange={event => setareaAtuacao(event)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <textarea 
                                        className="textarea" 
                                        placeholder="Menssagem"
                                        value={message} 
                                        onChange={msg => setMessage(msg.target.value)}
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    ) 
}