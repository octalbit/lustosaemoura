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
           <TitleSecondary text="Nossas áreas de atuação" />
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
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
                                    <p>There are many variations of passages of Lorem Ipsum looking at its layout.</p>
                                    <Link to="">Mais sobre</Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    )
}