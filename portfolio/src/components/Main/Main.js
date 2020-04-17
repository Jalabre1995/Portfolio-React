import React from 'react';
import LandingPage from '../LandingPage/LandingPage.js';
import { Switch, Route } from 'react-router-dom';
import About from '../../Pages/About/About.js';
import Contact from '../../Pages/Contact/Contact.js';
import Resume from '../Resume/Resume.js';
import Portfolio from '../../Pages/Portfolio/Portfolio.js';

const Main = () =>  (
    <Switch>
        <Route exact path="/"component={LandingPage} />
        <Route path='/about' component={About} />
        <Route path='/contact'component={Contact} />
        <Route path ='/resume'component={Resume}/>
        <Route path='portfolio'component={Portfolio}/>
    </Switch>
)

export default Main;