import React from 'react';

// import { Link } from 'react-router-dom';

import Imgnotice from '../assets/img/img-notice.jpg';

import TitleSecundary from './TitleSecondary';

const News = () => {
    return (
        <section className="lm-news">
            <TitleSecundary text="Notícias" />
            <div className="container">
                <div className="columns">
                    <div className="column ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgnotice} alt="Vem da Api" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-content-news">
                                    <div className="lm-title-info-news">
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                        
                                    </div>
                                    <div className="lm-desc-info-news">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgnotice} alt="Vem da Api" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-content-news">
                                    <div className="lm-title-info-news">
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                        
                                    </div>
                                    <div className="lm-desc-info-news">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={Imgnotice} alt="Vem da Api" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="lm-content-news">
                                    <div className="lm-title-info-news">
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                        
                                    </div>
                                    <div className="lm-desc-info-news">
                                        <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                        </p>
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

export default News
