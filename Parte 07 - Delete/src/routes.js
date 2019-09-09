import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index';
import Details from './pages/details/details';
import Insert from './pages/insert/insert';
import Update from './pages/update/update';
import Delete from './pages/delete/delete';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Index} />
            <Route path = "/usuarios/:id" component={Details} />
            <Route path = "/CriarUsuarios" component={Insert} />
            <Route path = "/EditarUsuario/:id" component={Update} />
            <Route path = "/DeletarUsuario/:id" component={Delete} />
        </Switch>
    </BrowserRouter>
)

export default Routes;