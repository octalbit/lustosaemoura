import React from 'react';
import Home from './pages/home/Home'
import About from './pages/about/About'
import News from './pages/news/News'
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={About} exact />
            <Route path="/noticias" component={News} exact />
        </Switch>
    )
}

