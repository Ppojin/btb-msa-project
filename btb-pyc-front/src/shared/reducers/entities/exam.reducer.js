import axios from 'axios';

// import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/actionType.util.js';

export const ACTION_TYPES = {
    FETCH_EXAM_LIST: 'exam/FETCH_EXAM_LIST',
    FETCH_EXAM: 'exam/FETCH_EXAM',
    CREATE_EXAM: 'exam/CREATE_EXAM',
    RESET: 'exam/RESET',
};

const initialState = {
    loading: false,
    errorMessage: null,
    entities: [],
    entity: {},
    updating: false,
    updateSuccess: false,
};

// Reducer

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_EXAM_LIST):
        case REQUEST(ACTION_TYPES.FETCH_EXAM):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true,
            };
        case REQUEST(ACTION_TYPES.CREATE_EXAM):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                updating: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_EXAM_LIST):
        case FAILURE(ACTION_TYPES.FETCH_EXAM):
        case FAILURE(ACTION_TYPES.CREATE_EXAM):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_EXAM_LIST):
            return {
                ...state,
                loading: false,
                entities: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.FETCH_EXAM):
            return {
                ...state,
                loading: false,
                entity: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.CREATE_EXAM):
            return {
                ...state,
                updating: false,
                updateSuccess: true,
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
const apiUrl = `http://${process.env.REACT_APP_APIHOST}/api-exam/v1/exam`;

// API
// Actions
const getExamListApi = (token, groupName) => axios({
    method: "get",
    url: `${apiUrl}`,
    headers: {
        'Authorization': `Bearer ${token}`,
    },
    params: {
        groupName: groupName
    }
});
export const getExamList = (token, groupName = 'default') => dispatch => {
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

const getExamApi = (token, examPK) => axios({
    method: "get",
    url: `${apiUrl}/${examPK}`,
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});
export const getExam = (token, examPK) => dispatch => {
    dispatch({ type: REQUEST(ACTION_TYPES.FETCH_EXAM) });
    return getExamApi(token, examPK).then(response => {
        dispatch({
            type: SUCCESS(ACTION_TYPES.FETCH_EXAM),
            payload: response
        })
    }).catch(error => {
        dispatch({
            type: FAILURE(ACTION_TYPES.FETCH_EXAM),
            payload: error
        })
    })
};
