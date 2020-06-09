import axios from 'axios';

import { cleanEntity } from '../../utils/entityUtils.js';
import { REQUEST, SUCCESS, FAILURE } from '../actionType.util.js';

export const ACTION_TYPES = {
    FETCH_TESTCASERESULT_LIST: 'testCaseResult/FETCH_TESTCASERESULT_LIST',
    FETCH_TESTCASERESULT: 'testCaseResult/FETCH_TESTCASERESULT',
    CREATE_TESTCASERESULT: 'testCaseResult/CREATE_TESTCASERESULT',
    RESET: 'testCaseResult/RESET',
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
        case REQUEST(ACTION_TYPES.FETCH_TESTCASERESULT_LIST):
        case REQUEST(ACTION_TYPES.FETCH_TESTCASERESULT):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true,
            };
        case REQUEST(ACTION_TYPES.CREATE_TESTCASERESULT):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                updating: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_TESTCASERESULT_LIST):
        case FAILURE(ACTION_TYPES.FETCH_TESTCASERESULT):
        case FAILURE(ACTION_TYPES.CREATE_TESTCASERESULT):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_TESTCASERESULT_LIST):
            return {
                ...state,
                loading: false,
                entities: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.FETCH_TESTCASERESULT):
            return {
                ...state,
                loading: false,
                entity: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.CREATE_TESTCASERESULT):
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

const apiUrl = 'api/test-case-results';

// Actions

export const getEntities = () => ({
    type: ACTION_TYPES.FETCH_TESTCASERESULT_LIST,
    payload: axios.get(`${apiUrl}`),
});

export const getEntity = id => {
    const requestUrl = `${apiUrl}/${id}`;
    return {
        type: ACTION_TYPES.FETCH_TESTCASERESULT,
        payload: axios.get(requestUrl),
    };
};

export const createEntity = entity => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_TESTCASERESULT,
        payload: axios.post(apiUrl, cleanEntity(entity)),
    });
    dispatch(getEntities());
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
