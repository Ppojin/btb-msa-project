import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Customer from 'container/Customer';

const AppRoutes = () => {
    // return (
    //     <div></div>
    // )
    return (
        <div className="containerRoutes">
            <Switch>
                <Route path="/customer" component={Customer}/>
                {/* <Route path="/" component={} /> */}
            </Switch>
        </div>
    )
}

export default AppRoutes;