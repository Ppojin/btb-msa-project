import axios from 'axios';

import {REQUEST, SUCCESS,FAILURE} from '../actionType.util.js'

export const ACTION_TYPES={
    FETCH_USER_DATA:  'customer/FETCH_CUSTOMER',
    RESET: 'customer/RESET'
}

const initialSate={
    errorMessage:null,
    userData:[],
    isFetcing : false,
    isFetched : false
}

export default (state=initialSate, action)=>{
    switch(action.type){
        case REQUEST(ACTION_TYPES.FETCH_USER_DATA):
            console.log("ACTION_TYPE - FETCH_USER_DATA - REQUEST :", action,state)
            return{
                ...state,
                isFetching :true
            };
        case FAILURE(ACTION_TYPES.FETCH_USER_DATA):
            console.log("ACTION_TYPE - FETCH_USER_DATA - FAILURE :", action,state)
            return{
                ...state,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_USER_DATA):
            console.log("ACTION_TYPE - FETCH_USER_DATA - SUCCESS :", action,state)
            return{
                ...state,
                userData: action.payload.data,
            }
        case ACTION_TYPES.RESET:
            console.log("ACTION_TYPE - RESET : ",action,state)
            return{
                ...initialSate,
            };
        default:
            console.log("ACTION_TYPE - default :",action,state)
            return state;
    }
}

// Fetch API
require('dotenv').config()
const apiUrl = `http://${process.env.REACT_APP_APIHOST}/api-user`;
const fetchDataAPI = (pk, token) => axios({
    method:"get",
    url: `${apiUrl}/v1/users/${pk}`,
    headers:{
        'Authorization' : `Bearer ${token}`
    }
})

//action

export const fetchData =(pk, token)=>dispatch =>{
    dispatch({type: REQUEST(ACTION_TYPES.FETCH_USER_DATA)})
    return fetchDataAPI(pk, token).then(
        response=>{
            dispatch({
                type:SUCCESS(ACTION_TYPES.FETCH_USER_DATA),
                payload: response
            })
        }
    ).catch(error=>{
        dispatch({
            type:FAILURE(ACTION_TYPES.FETCH_USER_DATA),
            payload:error
        })
    })
}