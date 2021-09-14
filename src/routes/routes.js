import React from 'react';
import { Route } from "wouter";
import Home from '../components/content/Home';
import Page1 from '../components/content/Page1';
import Page2 from '../components/content/Page2';

const Routes = () => {
    return [
        <Route path="/" exact component={Home} />,
        <Route path="/link1" exact component={Page1} />,
        <Route path="/link2" exact component={Page2} />,
    ]


}

export default Routes;