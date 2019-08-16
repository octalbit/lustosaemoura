import React from 'react'
import './TitlePage.css'
// import ReactDOM from 'react-dom';

 const TitlePage = ({text}) => {
    return (
        <section className="lm-title-page">
            <div className="container">
                <div className="lm-title">
                    <h3>{text}</h3>
                </div>
            </div>
        </section>
    )
}

export default TitlePage
