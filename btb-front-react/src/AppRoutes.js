import React from 'react';

import { Router, Route } from 'react-router-dom';
import Customer from 'container/Customer';

const AppRoutes = () => {
    return (
        <div className="containerRoutes">
            <Router>
                <Route path="/customer" component={Customer}/>
                {/* <Route path="/" component={} /> */}
            </Router>
        </div>
    )
}

export default AppRoutes;