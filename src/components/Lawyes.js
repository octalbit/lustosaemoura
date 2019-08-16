import React from 'react';
import './Lawyes.css'

import { Link } from 'react-router-dom';

import Imgvic from '../assets/img/imgvic.jpg';
import Sectiontitle from '../components/SectionTitle';

export default function Lawyes() {
    return (
        <section className="lm-lawyes">
            <Sectiontitle text="Nossos advogados" />
            <div className="container">
                <div className="columns lm-card-lawyes">
                    <div className="column ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgvic} alt="Vicente Lustosa" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-info-lawyes">
                                    <h4>Vicente Lustosa</h4>
                                    <span>Advogado & CEO</span>
                                    <p><strong>Tel: </strong><Link>+55 86 9 99223344</Link></p>
                                    <p><Link>vicente@gmail.com</Link></p>
                                    <div className="lm-social-icons-cord">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card ">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgvic} alt="Vicente Lustosa" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-info-lawyes">
                                    <h4>Vicente Lustosa</h4>
                                    <span>Advogado & CEO</span>
                                    <p><strong>Tel: </strong><Link>+55 86 9 99223344</Link></p>
                                    <p><Link>vicente@gmail.com</Link></p>
                                    <div className="lm-social-icons-cord">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card ">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgvic} alt="Vicente Lustosa" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-info-lawyes">
                                    <h4>Vicente Lustosa</h4>
                                    <span>Advogado & CEO</span>
                                    <p><strong>Tel: </strong><Link>+55 86 9 99223344</Link></p>
                                    <p><Link>vicente@gmail.com</Link></p>
                                    <div className="lm-social-icons-cord">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgvic} alt="Vicente Lustosa" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-info-lawyes">
                                    <h4>Vicente Lustosa</h4>
                                    <span>Advogado & CEO</span>
                                    <p><strong>Tel: </strong><Link>+55 86 9 99223344</Link></p>
                                    <p><Link>vicente@gmail.com</Link></p>
                                    <div className="lm-social-icons-cord">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>         
    )
}

