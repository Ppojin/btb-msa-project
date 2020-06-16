import axios from 'axios';

// import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/actionType.util.js';
import { cleanEntity } from '../../utils/entityUtils.js';

export const ACTION_TYPES = {
    FETCH_EXAM_LIST: 'exam/FETCH_EXAM_LIST',
    FETCH_QUESTIONS :'exam/FETCH_QUESTIONS',
    FETCH_EXAM_FINISH: 'exam/FETCH_EXAM_FINISH',
    RESET: 'exam/RESET',
};

export const initialState = {
    loading: false,
    errorMessage: null,
    entities:[],
    entity:{},
    updating: false,
    updateSuccess: false,
};

// Reducer

export const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_EXAM_LIST):
        case REQUEST(ACTION_TYPES.FETCH_EXAM_FINISH):
        case REQUEST(ACTION_TYPES.FETCH_QUESTIONS):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_EXAM_LIST):
        case FAILURE(ACTION_TYPES.FETCH_EXAM_FINISH):
        case FAILURE(ACTION_TYPES.FETCH_QUESTIONS):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_EXAM_LIST):
        case SUCCESS(ACTION_TYPES.FETCH_EXAM_FINISH):
            return {
                ...state,
                loading: false,
                entities: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.FETCH_QUESTIONS):
            return {
                ...state,
                loading: false,
                entity: action.payload.data,
            };
        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

require('dotenv').config();
const examUrl = `http://${process.env.REACT_APP_APIHOST}/api-qabank/v1/questions`;

// API
// Actions
const getExamListApi = (token,groupName) => axios({
    method: "get",
    url: `${examUrl}`,
    headers: {
        'Authorization': `Bearer ${token}`,
    },
    params:{
        groupName:groupName
    }
});

export const getExamList = (token, groupName='default') => dispatch => {
    dispatch({ type: REQUEST(ACTION_TYPES.FETCH_EXAM_LIST) });
    return getExamListApi(token, groupName).then(response => {
        dispatch({
            type: SUCCESS(ACTION_TYPES.FETCH_EXAM_LIST),
            payload: response,
        })
    }).catch(error => {
        dispatch({
            type: FAILURE(ACTION_TYPES.FETCH_EXAM_LIST),
            payload: error
        })
    })
};

const getExaminfoApi = (token,questionpk,customerpk)=>axios({
    method:"get",
    url:`${examUrl}/${questionpk}/${customerpk}`,
    headers:{
        'Authorization':`Bearer ${token}`
    }
})

export const getQuestions = (token,questionpk,customerpk) => async dispatch=>{
    await dispatch({type:REQUEST(ACTION_TYPES.FETCH_QUESTIONS)});
    return getExaminfoApi(token,questionpk,customerpk).then(response=>{
        dispatch({
            type:SUCCESS(ACTION_TYPES.FETCH_QUESTIONS),
            payload:response,
        })
    }).catch(error=>{
        dispatch({
            type:FAILURE(ACTION_TYPES.FETCH_QUESTIONS),
            payload:error,
        })
    })
}

const ExamFinishAPI = (token) => axios({
    method: "post",
    url: `${examUrl}`,
    headers: {
        'Authorization' : `Bearer ${token}`,
    },
})

export const ExamFinish = token => async dispatch => {
    await dispatch({
        type: ACTION_TYPES.FETCH_EXAM_FINISH,
        payload: axios.post(examUrl, cleanEntity(token)),
    });
    return ExamFinishAPI(token).then(response=>{
        dispatch({
            type: SUCCESS(ACTION_TYPES.FETCH_EXAM_FINISH),
            payload : response,
        })
    }).catch(error=>{
        dispatch({
            type:FAILURE(ACTION_TYPES.FETCH_EXAM_FINISH),
            payload: error,
        })
    })
};