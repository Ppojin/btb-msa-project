import axios from 'axios';

import { cleanEntity } from '../../utils/entityUtils.js'
import { REQUEST, SUCCESS, FAILURE } from '../actionType.util.js';


export const ACTION_TYPES = {
    FETCH_EXAMRESULT_LIST: 'examResult/FETCH_EXAMRESULT_LIST',
    FETCH_EXAMRESULT_INFO: 'examResult/FETCH_EXAMRESULT_INFO',
    CREATE_EXAMRESULT: 'examResult/CREATE_EXAMRESULT',
    RESET: 'examResult/RESET',
};

const initialState = {
    questionResultpk:"",
    questionpk:"",
    groupName:"",
    customerpk:"",
    gitURL:"",
    createDate:"",
    testCaseResultResponseList:[],
    errorMessage: null,
    updating: false,
    updateSuccess: false,
};

// Reducer

export const  examReusltReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_EXAMRESULT_LIST):
        case REQUEST(ACTION_TYPES.FETCH_EXAMRESULT):
        case REQUEST(ACTION_TYPES.CREATE_EXAMRESULT):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                updating: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_EXAMRESULT_LIST):
        case FAILURE(ACTION_TYPES.FETCH_EXAMRESULT):
        case FAILURE(ACTION_TYPES.CREATE_EXAMRESULT):
            return {
                ...state,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_EXAMRESULT_LIST):
            return {
                ...state,
                testCaseResultResponseList: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.FETCH_EXAMRESULT):
            return {
                ...state,
                loading: false,
                testCaseResultResponseList: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.CREATE_EXAMRESULT):
            return {
                ...state,
                updating: false,
                updateSuccess: true,
                testCaseResultResponseList: action.payload.data,
            };
        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
require('dotenv').config()
const examResultUrl = `http://${process.env.REACT_APP_APIHOST}/api-result/v1/result`
// const apiUrl = 'api/exam-results';
// const apiUrl = http://{{localip}}:8011/api-result/v1/result?customerPK={{customerPK}}&questionPK={{questionPK}}
// Actions

const getExamResultListApi = (customerpk,questionpk) => axios({
    method: "get",
    url: `http://{{localip}}:8011/api-result/v1/result?customerPK=${customerpk}&questionPK=${questionpk}`,
})

export const getResultList = (customerpk, questionpk) => dispatch=> {
    dispatch({type:REQUEST(ACTION_TYPES.FETCH_EXAMRESULT_LIST)})
    return getExamResultListApi(customerpk, questionpk).then(response=>{
        dispatch({
            type: SUCCESS(ACTION_TYPES.FETCH_EXAMRESULT_LIST),
            payload: response
        })
    }).catch(error=>{
        dispatch({
            type:FAILURE(ACTION_TYPES.FETCH_EXAMRESULT_LIST),
            payload:error
        })
    })
}

export const getResult = questionResultpk => {
    const requestUrl = `${examResultUrl}/${questionResultpk}`;
    return {
        type: ACTION_TYPES.FETCH_EXAMRESULT,
        payload: axios.get(requestUrl),
    };
};





export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
