import React from 'react'
import './SectionTitle.css'
// import ReactDOM from 'react-dom';

 const SectionTitle = ({text}) => {
    return (
        <section className="lm-section-title">
            <div className="container">
                <div className="lm-title">
                    <h3>{text}</h3>
                </div>
            </div>
        </section>
    )
}

export default SectionTitle