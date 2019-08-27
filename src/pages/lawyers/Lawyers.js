import './lawyers.css';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import Lawyers from '../../components/getLawyers';
import FormSendEmail from '../../components/FormSendEmail';

export default props =>
    <section className="lm-lawyers-page">
        <TitlePage text="Nosso time de advogados" />
        <div className="container">
              <div className="lm-content-lawyers">
                  <Lawyers />
                  <FormSendEmail />
              </div>
        </div>
    </section>
