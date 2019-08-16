import React from 'react';
import './BlockQuote.css'

import Avatar from '../assets/img/avatar.svg'

export default function BlockQuote() {
    return (
        <section className="lm-block-quote">
            <div className="container">
                <div className="lm-content-block-quote">
                    <blockquote>
                        <p>Sejam as leis claras, uniformes e precisas, porque interpretá-las, quase sempre, é o mesmo que corrompê-las.</p>
                        <img src={Avatar} alt="Voltaire" />
                        <cite>Voltaire</cite>
                    </blockquote>
                </div>
            </div>
        </section>               
    )
}