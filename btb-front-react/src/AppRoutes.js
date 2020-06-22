import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Customer from 'container/Customer';
import Exam from 'container/Exam'

const AppRoutes = () => {
    // return (
    //     <div></div>
    // )
    return (
        <div className="containerRoutes">
            <Switch>
                <Route path="/customer" component={Customer}/>
                <Route path="/exam" component={Exam}/>
                {/* <Route path="/" exact component={Login} /> */}
            </Switch>
        </div>
    )
}

export default AppRoutes;