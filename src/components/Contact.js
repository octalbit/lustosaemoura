import React, { useState } from 'react';
import Select from 'react-select';
// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle'

export default function Contact() {

    const [nome,setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [areaAtuacao, setareaAtuacao] = useState('');
    const [msg, setMsg] = useState('');  
    
    function handleSubmit(event) {
      alert('Um nome foi enviado: ' );
      console.log(nome);
      console.log(email);
      console.log(telefone);
      console.log(areaAtuacao);
      console.log(msg);
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
                                        value={nome} 
                                        onChange={nome => setNome(nome.target.value)} 
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
                                        value={msg} 
                                        onChange={msg => setMsg(msg.target.value)}
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