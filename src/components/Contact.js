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
      alert('Um name foi enviado: ' );
      axios.post('http://localhost:3000/email', {
        name,  
        message,
        telefone,
        email,
        areaAtuacao
      })
    //   const transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'oioctalbit@gmail.com',
    //         pass: 'Angical123'
    //     }
    // });
    
    // // NB! No need to recreate the transporter object. You can use
    // // the same transporter object for all e-mails
    
    // // setup e-mail data with unicode symbols
    // const mailOptions = {
    //     from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    //     to: 'rafaelangical2@gmail.com, padrecicerometalurgica@hotmail.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world ✔', // plaintext body
    //     html: '<b>Hello world ✔</b>' // html body
    // };
    
    // // send mail with defined transport object
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log('Message sent: ' + info.response);
    
    // });
      console.log(name);
      console.log(email);
      console.log(telefone);
      console.log(areaAtuacao);
      console.log(message);
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