import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OccupationArea from './pages/occupationArea/occupationArea';
import Lawyers from './pages/lawyers/Lawyers';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={About} exact />
            <Route path="/area-de-atuacao" component={OccupationArea} exact />
            <Route path="/advogados" component={Lawyers} exact />
            <Route path="/noticias" component={News} exact />
            <Route path="/contatos" component={Contact} exact />
        </Switch>
    )
}
