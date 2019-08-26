import React from 'react'
import './OccupationArea.css'

import { Link } from 'react-router-dom';
import TitleSecondary from './TitleSecondary';
import Icon1 from  '../assets/img/emp.svg';
import Icon2 from  '../assets/img/fan.svg';
import Icon3 from  '../assets/img/civ.svg';
import Icon4 from  '../assets/img/trab.svg';
import Icon5 from  '../assets/img/imo.svg';
import Icon6 from  '../assets/img/tri.svg';
import Icon7 from  '../assets/img/sau.svg';
import Icon8 from  '../assets/img/adm.svg';

export default function OccupationArea() {
    return (
        <section className="lm-occupation-area">
           <TitleSecondary
              text="Nossas áreas de atuação"
              subtext="Nosso Escritório atua em toda região (especialmente no estado do Piauí) e em todas as instâncias, incluindo o Superior Tribunal de Justiça e o Supremo Tribunal Federal."
            />
            <div className="container">
                <div className="lm-content-occupation-area">
                    <div className="columns">
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon1} alt="Direito Empresarial" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito Empresarial</h4>
                                    <p>É o ramo do direito que estuda as relações que envolvem a empresa e o empresário.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon2} alt="Direito da Familia" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito da Familia</h4>
                                    <p>Ramo que trata das relações familiares, ou seja, estabelece as normas de convivência familiar.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon3} alt="Direito Cívil" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito Cívil</h4>
                                    <p>Elaboração e análise de contratos Direito de família Direito das sucessões Planejamento familiar.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon4} alt="Direito do Trabalho" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito do Trabalho</h4>
                                    <p>Profunda experiência na orientação e na elaboração de contratos individuais e coletivos de trabalho.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon5} alt="Direito Imobiliário" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito Imobiliário</h4>
                                    <p>Sólida experiência em transações imobiliárias por toda a região, prestando serviços para todas as empresas.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon6} alt="Direito Tributário" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito Tributário</h4>
                                    <p>Auxílio e elaboração de planejamento fiscal, destacando a analise de aspectos tributários e previdenciários.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon7} alt="Direito à Saude" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito à Saude</h4>
                                    <p>Defendemos processos decorrentes de erros médicos, onde se discute indenização, cumulada ou não com dano moral.</p>

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="lm-box-item">
                                <div className="icon">
                                    <img src={Icon8} alt="Direito Administrativo" />
                                </div>
                                <div className="lm-content-item">
                                    <h4>Direito Administrativo</h4>
                                    <p>Nossos serviços incluem consultoria administrativa e atuação no contencioso.</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
