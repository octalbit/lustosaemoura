import './about.css';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import Logo from '../../assets/img/logo.svg';

export default function About() {
    return (
        <section className="lm-about-page">
          <TitlePage text="Quem nós somos" />
          <div className="container">
              <div className="lm-content-about-page">
                <div className="columns">
                  <div className="column is-two-thirds">
                    <div className="lm-text-about-page">
                      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                      <p className="lm-margin-btm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="lm-img-about-page">
                      <img src={Logo} alt="Lustosa e Moura" />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="lm-desc-about-page">
                      <h3>Missão</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh ex, cursus eget porta eget, consequat quis nisi. Nullam tincidunt gravida augue nec tempor. Nunc eu velit dictum, dignissim eros quis, consectetur ligula.</p>
                    </div>
                  </div>
                  <div className="column">
                  <div className="lm-desc-about-page">
                    <h3>Visão</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh ex, cursus eget porta eget, consequat quis nisi. Nullam tincidunt gravida augue nec tempor. Nunc eu velit dictum, dignissim eros quis, consectetur ligula.</p>
                  </div>
                  </div>
                  <div className="column">
                  <div className="lm-desc-about-page">
                    <h3>Valores</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh ex, cursus eget porta eget, consequat quis nisi. Nullam tincidunt gravida augue nec tempor. Nunc eu velit dictum, dignissim eros quis, consectetur ligula.</p>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
    )
}
