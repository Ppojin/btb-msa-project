import axios from 'axios';

import { cleanEntity } from '../../utils/entityUtils.js';
import { REQUEST, SUCCESS, FAILURE } from '../actionType.util.js'

export const ACTION_TYPES = {
    FETCH_CATEGORY_LIST: 'category/FETCH_CATEGORY_LIST',
    CREATE_CATEGORY: 'category/CREATE_CATEGORY',
    RESET: 'category/RESET',
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
        case REQUEST(ACTION_TYPES.FETCH_CATEGORY_LIST):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true,
            };
        case REQUEST(ACTION_TYPES.CREATE_CATEGORY):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                updating: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_CATEGORY_LIST):
        case FAILURE(ACTION_TYPES.CREATE_CATEGORY):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_CATEGORY_LIST):
            return {
                ...state,
                loading: false,
                entities: action.payload.data,
            };
        case SUCCESS(ACTION_TYPES.CREATE_CATEGORY):
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

const apiUrl = 'api/categories';

// Actions

export const getCategoryList = () => ({
    type: ACTION_TYPES.FETCH_CATEGORY_LIST,
    payload: axios.get(`${apiUrl}`),
});

export const createCategory = entity => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_CATEGORY,
        payload: axios.post(apiUrl, cleanEntity(entity)),
    });
    dispatch(getCategoryList());
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
