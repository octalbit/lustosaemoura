import React from 'react';

// import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle'

const Contact = () => { 
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            areaAtuacao: '',
            msg: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };

      handleChange(event) {
        this.setState(
            {
                nome: event.target.nome,
                email: event.target.email
            }
        );
      };
    
      handleSubmit(event) {
        alert('Um nome foi enviado: ' );
        event.preventDefault();
      };
    

    return (
        <section classname="lm-contact">
            <SectionTitle text="Solicite uma consulta" />
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        placeholder="Nome"
                                        value={this.state.nome} 
                                        onChange={this.handleChange}
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
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <div className="select">
                                        <select>
                                            <option disabled >Área de Atuação: </option>
                                            <option>Direito Empresarial</option>
                                            <option>Direito da Familia</option>
                                            <option>Direito Cívil</option>
                                            <option>Direito do Trabalho</option>
                                            <option>Direito Imobiliário</option>
                                            <option>Direito Tributário</option>
                                            <option>Direito à Saude</option>
                                            <option>Direito Administrativo</option>
                                        </select>
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
                                        placeholder="Menssagem">

                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    ) 
}
export default Contact