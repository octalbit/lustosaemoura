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
                      <h2>Somos à  Lustosa e Moura — Advocacia e Consultoria Jurídica.</h2>
                      <p className="lm-margin-btm">LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é um escritório de advocacia localizado em Amarante - PI e Regeneração - PI, atuante nas áreas do direito civil, consumidor, trabalhista, tributário e previdenciário, oferecendo toda a assistência e consultoria jurídica para seus clientes.</p>
                      <p className="lm-margin-btm">LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é formada por advogadas com formação e especialização nas mais importantes universidades públicas e privadas do Estado. Acreditamos no aperfeiçoamento da sociedade pelo Direito. E uma advocacia com ética, responsabilidade, excelência das soluções legais, satisfação de nossos clientes e realização pessoal de nossos integrantes.</p>
                      <p>O escritório oferece assessoria jurídica às pessoas físicas e também jurídicas, primando sempre pela honestidade, transparência e a responsabilidade nos trabalhos, possibilitando assim a maximização dos resultados e a plena satisfação dos nossos clientes.</p>
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
                      <p>Prestar serviços jurídicos com excelência, oferecendo soluções inovadoras para obtenção de resultados expressivos que garantam a satisfação de seus clientes.</p>
                    </div>
                  </div>
                  <div className="column">
                  <div className="lm-desc-about-page">
                    <h3>Visão</h3>
                    <p>Manter-se como referência nos segmentos em que atua, sendo sempre reconhecida pelos seus clientes como uma empresa moderna, inovadora e eficiente.</p>
                  </div>
                  </div>
                  <div className="column">
                  <div className="lm-desc-about-page">
                    <h3>Valores</h3>
                    <p>Integridade e Ética. Atuar de forma integra e ética na condução dos negócios e na relação com seus colaboradores.</p>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
    )
}
