import React from 'react';
import './Lawyes.css'

import Sectiontitle from '../components/SectionTitle';
import GetLawyers from '../components/getLawyers.js';

export default function Lawyes() {
    return (
        <section className="lm-lawyes">
            <Sectiontitle text="Nossos advogados" />
            <div className="container margim-bottom">
               <GetLawyers />
            </div>
        </section>         
    )
}

