import './Lawyes.css';
import React from 'react';
import Imgvic from '../assets/img/imgvic.jpg';
import Imgclis from '../assets/img/imgclis.jpg';
import Imgbet from '../assets/img/imgbet.jpg';
import Imgdhy from '../assets/img/imgdhy.jpg';
import Imgshy from '../assets/img/imgshy.jpg';
import Imgric from '../assets/img/imgric.jpg';

export default props =>
<>
<div className="columns padding-mobile lm-card-lawyes ">
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
                    <p>OAB PI 17.348, graduado bacharel em Direito na Universidade Estadual do Piauí-UESPI, Bacharel em Administração Pública na Universidade Federal do Piauí-UFPI. Atua nas áreas: cível, penal, trabalhista, administrativa, tributário e previdenciário.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="column">
    <div className="card ">
            <div className="card-image">
                <figure className="image">
                    <img src={Imgclis} alt="Vicente Lustosa" />
                </figure>
            </div>
            <div className="card-content">
                <div className="lm-info-lawyes">
                    <h4>Clistines Moura</h4>
                    <span>Advogado</span>
                    <p>OAB PI 12.888, graduado Bacharel em Direito na Faculdade Santo Agostinho-UNIFSA. Atua nas área: cível, penal, administrativa, trabalhista e previdenciária.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="column">
    <div className="card ">
            <div className="card-image">
                <figure className="image">
                    <img src={Imgbet} alt="Vicente Lustosa" />
                </figure>
            </div>
            <div className="card-content">
                <div className="lm-info-lawyes">
                    <h4>DR. BERTOLDO NETO </h4>
                    <span>Advogado</span>
                    <p>OAB PI 18.535 graduado bacharel em Direito na Faculdade do Piauí- FAPI.  Área de atuação: Licitações Contratos, Consumidor, Previdenciária.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="columns padding-mobile">
    <div className="column">
    <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={Imgshy} alt="Vicente Lustosa" />
                </figure>
            </div>
            <div className="card-content">
                <div className="lm-info-lawyes">
                    <h4>DRA. SHYRLLY HYSNNADYA</h4>
                    <span>Advogada</span>
                    <p>OAB PI...., graduada bacharel em Direito na Faculdade de Tecnologia do Piauí-FATEPI. Atua nas áreas: trabalhista, cível, administrativo, contratos, previdenciária e penal.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="column">
    <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={Imgdhy} alt="DR. DHYLSON DA SILVA" />
                </figure>
            </div>
            <div className="card-content">
                <div className="lm-info-lawyes">
                    <h4>DR. DHYLSON DA SILVA</h4>
                    <span>Advogado</span>
                    <p>OAB PI 16.620, graduado Bacharel em Direito na Universidade Estadual do Piauí-UESPI, Pós Graduado em Gestão Pública pela Universidade Federal do Piauí-UFPI. Atua nas áreas:  Previdenciária, Trabalhista, Criminal, Consumidor.</p>
                </div>
            </div>
        </div>
    </div>  
    <div className="column">
    <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={Imgric} alt="Vicente Lustosa" />
                </figure>
            </div>
            <div className="card-content">
                <div className="lm-info-lawyes">
                    <h4>DR. LUIS RICARDO RODRIGUES</h4>
                    <span>Advogado</span>
                    <p>OAB-PI 18.096, Bacharel em direito na Universidade Estadual do Piauí-UESPI. Atua nas áreas: Cível, Trabalhista e Previdenciária.</p>
                </div>
            </div>
        </div>
    </div>      
</div>
</>