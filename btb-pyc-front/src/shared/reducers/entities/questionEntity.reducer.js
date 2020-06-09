import axios from 'axios';

import { cleanEntity } from '../../utils/entityUtils.js';
import { REQUEST, SUCCESS, FAILURE } from '../actionType.util.js';

export const ACTION_TYPES = {
    FETCH_QUESTIONENTITY_LIST: 'questionEntity/FETCH_QUESTIONENTITY_LIST',
    FETCH_QUESTIONENTITY: 'questionEntity/FETCH_QUESTIONENTITY',
    CREATE_QUESTIONENTITY: 'questionEntity/CREATE_QUESTIONENTITY',
    RESET: 'questionEntity/RESET',
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
        case REQUEST(ACTION_TYPES.FETCH_QUESTIONENTITY_LIST):
        case REQUEST(ACTION_TYPES.FETCH_QUESTIONENTITY):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true,
            };
        case REQUEST(ACTION_TYPES.CREATE_QUESTIONENTITY):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                updating: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_QUESTIONENTITY_LIST):
        case FAILURE(ACTION_TYPES.FETCH_QUESTIONENTITY):
        case FAILURE(ACTION_TYPES.CREATE_QUESTIONENTITY):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_QUESTIONENTITY_LIST):
            return {
                ...state,
                loading: false,
                entities: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.FETCH_QUESTIONENTITY):
            return {
                ...state,
                loading: false,
                entity: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.CREATE_QUESTIONENTITY):
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

const apiUrl = 'api/question-entities';

// Actions

export const getQuestionList = (page, size, sort) => ({
    type: ACTION_TYPES.FETCH_QUESTIONENTITY_LIST,
    payload: axios.get(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getQuestion = id => {
    const requestUrl = `${apiUrl}/${id}`;
    return {
        type: ACTION_TYPES.FETCH_QUESTIONENTITY,
        payload: axios.get(requestUrl),
    };
};

export const createQuestion = entity => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_QUESTIONENTITY,
        payload: axios.post(apiUrl, cleanEntity(entity)),
    });
    dispatch(getQuestionList());
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
