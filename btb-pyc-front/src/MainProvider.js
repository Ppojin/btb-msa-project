import React from 'react';

import {
    Provider,
    createStoreHook,
    createDispatchHook,
    createSelectorHook,
} from 'react-redux'
import rootReducer from './shared/reducers';
import { createStore, applyMiddleware,bindActionCreators, } from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import setupAxiosInterceptors from './config/axios-interceptor.js'
const prov_Context = React.createContext();

export const useStore = createStoreHook(prov_Context)
export const useDispatch = createDispatchHook(prov_Context)
export const useSelector = createSelectorHook(prov_Context)
const logger = createLogger();
const prov_Store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, promiseMiddleware))

export default function MainProvider({children}){
    return(
        <Provider context={prov_Context} store={prov_Store}>
            {children}
        </Provider>
    )
}