import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListProd from './pages/ListProd';
import DetProd from './pages/DetProd';
import Login from './pages/Login';
import AdmProd from './pages/AdmProd';
import Cupon from './pages/ListCupons';


function Routes(){
    return(
        <BrowserRouter>
            <Switch> 

                <Route path="/" exact component={ListProd}/>
                <Route path="/prod/:id" component={DetProd}/>
                <Route path="/login" component={Login}/>
                <Route path="/adm" component={AdmProd}/>
                <Route path="/cupons" component={Cupon}/>
                <Route path="/adm/cupon" component={DetProd}/>
            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;