import axios from 'axios';
// import {useDispatch} from 'react-reudx';

// import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from '../actionType.util.js';
// import axiosMiddleware from 'redux-axios-middleware';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

export const ACTION_TYPES = {
    LOG_IN: 'customer/SIGN_IN',
    SIGN_UP: 'customer/SIGN_UP',
    RESET: 'customer/RESET',
};

const initialState = {
    loading: false,
    errorMessage: null,
    UserInfo: [],
    // entity: {},
    totalItems: 0,
    isLogged: false,
    isSignUp: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.SIGN_UP):
        case REQUEST(ACTION_TYPES.LOG_IN):
            console.log(action, state)
            return {
                ...state,
                loading:true,
            };
        case FAILURE(ACTION_TYPES.SIGN_UP):
        case FAILURE(ACTION_TYPES.LOG_IN):
            console.log(action, state)
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.SIGN_UP):
            console.log(action, state)
            return {
                ...state,
                entity: action.payload.data,
                isSignUp:true,
            };
        case SUCCESS(ACTION_TYPES.LOG_IN):
            console.log(action.payload)
            return {
                ...state,
                // entity: action.payload.data,
                UserInfo: action.payload.headers,
                // headers: action.payload.data,
                isLogged:true,
            };
        case ACTION_TYPES.RESET:
            console.log(action, state)
            return {
                ...initialState,
            };
        default:
            console.log(action, state)
            return state;
    }
}
require('dotenv').config()
const apiUrl = `http://${process.env.REACT_APP_APIHOST}/api-user`;
// const apiUrl = `http://${process.env.REACT_APP_APIHOST}/api-user`;
// const apiUrl = 'http://localhost:10000';
// const apiUrl = 'http://121.139.74.97:8011/api-user';
const signupAPI = (entity) =>{
    console.log("signUpAPI console log : " +entity);
    return axios.post(`${apiUrl}/signup`, entity)
}
const loginAPI = (entity) => {
    // console.log("logInAPI console log : " +loginAPI(entity));
    return axios.post(`${apiUrl}/signin`, entity)
}

// Actions
export const signup = entity => dispatch => {
    // const dispatch = useDispatch();
    dispatch({ type: REQUEST(ACTION_TYPES.SIGN_UP) })
    return signupAPI(entity).then(response => {
        dispatch({
            type: SUCCESS(ACTION_TYPES.SIGN_UP),
            payload: response,
        })
    }).catch(error => {
        dispatch({
            type: FAILURE(ACTION_TYPES.SIGN_UP),
            payload: error,
        })
    })
}

export const login = entity => dispatch => {
    dispatch({ type: REQUEST(ACTION_TYPES.LOG_IN) })
    return loginAPI(entity).then(response => {
        dispatch({
            type: SUCCESS(ACTION_TYPES.LOG_IN),
            payload: response,
        })
    },)
    .catch(error => {
        dispatch({
            type: FAILURE(ACTION_TYPES.LOG_IN),
            payload: error,
        })
    })
}