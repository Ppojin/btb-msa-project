import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore, bindActionCreators } from 'redux';
import {Provider, useStore} from 'react-redux';

//core component
import Routes from 'Routes/Routes.js'
import rootReducer from './shared/reducers/store/index.js';
import setupAxiosInterceptors from './config/axios-interceptor.js'

import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
//css
// import App from './App';

import './assets/css/cssMain.css?v=1.9.0';
const logger = createLogger();

const store =createStore(rootReducer, applyMiddleware(logger, ReduxThunk,promiseMiddleware));

const actions = bindActionCreators({}, store.dispatch);
setupAxiosInterceptors(()=>actions);
const indexContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <indexContext.Provider value={store}> */}
        <Routes/>
      {/* </indexContext.Provider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// import MainProvider from './MainProvider.js'

// ReactDOM.render(
//   <React.StrictMode>
//       <MainProvider >
//         <Routes/>
//       </MainProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );