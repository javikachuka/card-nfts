import React from 'react';
import { Route } from "wouter";
import Detail from '../components/content/Detail/Detail';
import Home from '../components/content/Home';
import MyNFTS from '../components/content/MyNFTS';
import Page2 from '../components/content/Page2';

const Routes = () => {
    return [
        <Route path="/" exact component={Home} />,
        <Route path="/myNFTS" exact component={MyNFTS} />,
        <Route path="/link2" exact component={Page2} />,
        <Route path="/nft/:id" exact component={Detail} />,
    ]


}

export default Routes;