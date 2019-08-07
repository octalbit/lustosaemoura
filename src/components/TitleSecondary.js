import React from 'react'

const TitleSecondary = ({text}) => {
    return (
        <section className="lm-section-title-secondary">
            <div className="container">
                <div className="lm-title-secondary">
                    <h3>{text}</h3>
                    <p>Os advogados da Lustosa e Moura ajudam seus clientes a resolver qualquer questão legal que uma empresa ou uma pessoa de negócios possa encontrar.</p>
                </div>
            </div>
        </section>
    )
}

export default TitleSecondary