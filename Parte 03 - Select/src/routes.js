import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index';


const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Index} />
        </Switch>
    </BrowserRouter>
)

export default Routes;