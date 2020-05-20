import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import NoMatchPage from './pages/NoMatchPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/index" component={Index}/>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>

                <Route component={NoMatchPage}/>
            </Switch>
        </BrowserRouter>
    );
}