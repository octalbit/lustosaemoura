import './occupationArea.css';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import Icon1 from  '../../assets/img/emp.svg';
import Icon2 from  '../../assets/img/fan.svg';
import Icon3 from  '../../assets/img/civ.svg';
import Icon4 from  '../../assets/img/trab.svg';
import Icon5 from  '../../assets/img/imo.svg';
import Icon6 from  '../../assets/img/tri.svg';
import Icon7 from  '../../assets/img/sau.svg';
import Icon8 from  '../../assets/img/adm.svg';

export default props =>
    <section className="lm-occupationArea-page">
        <TitlePage text="Nossas áreas de atuação" />
        <div className="container">
            <div className="lm-content-page-occupationArea">
                <div className="columns">
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon1} alt="" />
                          <h3>Direito Empresarial</h3>
                          <p>O sucesso de todo negócio começa em sua estrutura. Essa é a chave para evitar problemas e desgastes futuros. Já ajudamos a formatar e reformatar empresas de diferentes segmentos e portes de mercado, auxiliando nas melhores escolhas para seu empreendimento se desenvolver da forma mais saudável e próspera possível.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon2} alt="" />
                          <h3>Direito da Familia</h3>
                          <p>No ramo do direito da família e sucessões, prestamos serviços relativamente a regime de bens no casamento; elaboramos pacto antenupcial, contrato de união estável por instrumento público ou particular.</p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon3} alt="" />
                          <h3>Direito Cívil</h3>
                          <p>A realidade atual exige soluções diferenciadas para os advogados em relação ao dia a dia e às transações, desde as comerciais até os familiares. Essa capacidade de transformar e, ao mesmo tempo, liderar com os mais diversos obstáculos deste setor só é possível com um time de advogados altamente qualificado para oferecer soluções jurídicas a altura dos novos desafios.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon4} alt="" />
                          <h3>Direito do Trabalho</h3>
                          <p>Atendimento e consultoria para empresas Atendimento preventivo. Análise de riscos e redução de passivos Propositura de ações judiciais Consultoria trabalhista e previdenciária Elaboração de contratos de trabalho.</p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon5} alt="" />
                          <h3>Direito Imobiliário</h3>
                          <p>Empreendimentos imobiliários exigem cuidado acada detalhe para não se tornar em dores de cabeça. Somos especialistas em operações e transações imobiliárias complexas. Agimos com visão estratégica para tornar o processo mais transparente, ágil e eficiente para todos os envolvidos.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon6} alt="" />
                          <h3>Direito Tributário</h3>
                          <p>Oferecer as soluções completas no contexto do ordenamento tributário brasileiro requer um conjunto igualmente completo de qualidades. Com experiência, excelência técnica e capilaridade, nós combinamos à escala e personalização para atender clientes dos segmentos mais variados.</p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon7} alt="" />
                          <h3>Direito à Saude</h3>
                          <p>Patrocinamos ou defendemos processos decorrentes de erros médicos, onde se discute indenização, cumulada ou não com dano moral. Patrocinamos ou defendemos ações judiciais relacionadas aos Planos de Saúde, tanto na esfera judicial, como no âmbito administrativo junto a Agência Nacional de Saúde Suplementar – ANS.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-oa">
                          <img className="lm-card-avatar" src={Icon8} alt="" />
                          <h3>Direito Administrativo</h3>
                          <p>O escritório atua na proteção dos interesses de pessoas físicas e jurídicas ante as três esferas da Administração Pública: União, Estados e Municípios, assim como suas autarquias, fundações, empresas públicas e sociedades de economia mista.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
