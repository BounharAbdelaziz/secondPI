import React from 'react';
import Home from './home'
import Contact from './contact';
import About from './about';
import Gallery from './gallery';
import { Switch, Route } from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/gallery" component={Gallery} />
        <Route  path="/about" component={About} />
    </Switch>
)

export default Main;