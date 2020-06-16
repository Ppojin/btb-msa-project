import React,{useState} from 'react';
import {createBrowserHistory} from 'history';
import { Route,  Router, Switch, Redirect} from 'react-router-dom'; 
//core component
import login from "components/sections/login.js"
import signup from "components/sections/signup.js"
import Main from 'layouts/MainTemplate.js';
import User from 'layouts/UserTemplate.js';
import AuthRoute from './AuthRoutes';
import NonAuthLayouts from 'layouts/Layouts.js'
import Authlayouts from 'layouts/AuthLayouts.js'
import exam from "components/sections/exam.js"
import LoginPage from '../components/main/login/LoginPage';
import result from 'components/sections/result.js'
import examdisc from 'components/sections/examdisc.js'
const hist = createBrowserHistory();

function Routes(){
    return(
        <Router history={hist}>
            <Switch>
                {/* <Route path="/main" component={Main}/> */}
                {/* <Route path="/user" component={User}/> */}
                <Route path="/scouter" component={NonAuthLayouts}/>
                
                {/* <Route path="/dailycheck" component={}/> */}
                {/* <Route path="/practice" component={}/> */}
                <Route path="/exam" component={exam}/>
                <Route path="/examdisc" component={examdisc}/>
                {/* <Route path="/ranking" component={}/> */}
                {/* <Route path="/board" component={}/> */}
                <Route path="/login" component={login}/>
                <Route path="/signup" component={signup}/>

                {/* <Route path="/findpassword" component={}/> */}
                <Route path="/auth" component={Authlayouts}/>
                <Route path="/result" component={result}/>
                {/* <AuthRoute path="/user">
                    <User/>
                </AuthRoute> */}
                <Redirect from="/" to="/scouter"/>
            </Switch>
        </Router>
    )
}

export default Routes