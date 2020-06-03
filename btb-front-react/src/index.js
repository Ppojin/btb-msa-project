import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './shared/reducers'
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import setupAxiosInterceptors from './config/axios-interceptor'

import { Provider } from 'react-redux';
import loggerMiddleware from 'middleware/loggerMiddleware';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk, loggerMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
);

const actions = bindActionCreators({}, store.dispatch);
setupAxiosInterceptors(()=>actions);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
