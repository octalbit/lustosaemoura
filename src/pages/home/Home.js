import React from 'react';

import Hero from '../../components/Hero';
import SectionAbout from '../../components/SectionAbout';
import OccupationArea from '../../components/OccupationArea';
import BlockQuote from '../../components/BlockQuote';
import Lawyes from '../../components/Lawyes';
export default function Home() {
    return (
        <div className="main">
            <Hero />
            <SectionAbout />
            <OccupationArea />
            <BlockQuote />
            <Lawyes />
        </div>
    )
}