import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {GlobalStyles} from '../assets/GlobalStyles'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Building from '../pages/Building'
import AddLeversObjectives from '../pages/AddLeversObjectives'
import LeversObjectives from '../pages/LeversObjectives'


const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add-levers-and-objectives" component={AddLeversObjectives} />
                    <Route exact path="/levers-and-objectives" component={LeversObjectives} />
                    <Route exact path="/services" component={Building} />
                    <Route exact path="/our-team" component={Building} />
                    <Route exact path="/help" component={Building} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
