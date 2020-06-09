import React,{useState} from 'react';
import {createBrowserHistory} from 'history';
import { Route,  Router, Switch, Redirect} from 'react-router-dom'; 
//core component
import Main from 'layouts/MainTemplate.js';
import User from 'layouts/UserTemplate.js';
import AuthRoute from './AuthRoutes';

const hist = createBrowserHistory();

function Routes(){


    return(
        <Router history={hist}>
            <Switch>
                <Route path="/main" component={Main}/>
                <Route paht="/user" component={User}/>
                
                {/* <AuthRoute path="/user">
                    <User/>
                </AuthRoute> */}
                <Redirect from="/" to="/main/home"/>
            </Switch>
        </Router>
    )
}

export default Routes