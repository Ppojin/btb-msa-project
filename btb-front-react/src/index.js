import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './shared/reducers'
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import setupAxiosInterceptors from './config/axios-interceptor'
import {createLogger} from 'redux-logger';
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
// import loggerMiddleware from 'middleware/loggerMiddleware';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();
const logger = createLogger();

const store = createStore(
    reducer,
    // applyMiddleware(ReduxThunk, loggerMiddleware),
    applyMiddleware(logger, ReduxThunk, promiseMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);

const actions = bindActionCreators({}, store.dispatch);
setupAxiosInterceptors(()=>actions);

ReactDOM.render(
    // <React.StrictMode>
    //     <Provider store={store}>
    //         <BrowserRouter>
    //             <App />
    //         </BrowserRouter>
    //     </Provider>
        // </React.StrictMode>,
    <Router history={hist}>
        <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/" component={Components} />
        </Switch>
    </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
