import React from 'react';

import Hero from '../../components/Hero';
import SectionAbout from '../../components/SectionAbout'
import OccupationArea from '../../components/OccupationArea'
export default function Home() {
    return (
        <div className="main">
            <Hero />
            <SectionAbout />
            <OccupationArea />
        </div>
    )
}