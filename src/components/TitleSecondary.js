import React from 'react'
import './TitleSecondary.css'

const TitleSecondary = ({text, subtext}) => {
    return (
        <section className="lm-section-title-secondary">
            <div className="container">
                <div className="lm-title-secondary">
                    <h3>{text}</h3>
                    <p>{subtext}</p>
                </div>
            </div>
        </section>
    )
}

export default TitleSecondary