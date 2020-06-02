import axios from 'axios';

import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type.util';

export const ACTION_TYPES = {
  FETCH_EXAMRESULT_LIST: 'examResult/FETCH_EXAMRESULT_LIST',
  FETCH_EXAMRESULT: 'examResult/FETCH_EXAMRESULT',
  CREATE_EXAMRESULT: 'examResult/CREATE_EXAMRESULT',
  RESET: 'examResult/RESET',
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
    case REQUEST(ACTION_TYPES.FETCH_EXAMRESULT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_EXAMRESULT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
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
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_EXAMRESULT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_EXAMRESULT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_EXAMRESULT):
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

const apiUrl = 'api/exam-results';

// Actions

export const getResultList = () => ({
  type: ACTION_TYPES.FETCH_EXAMRESULT_LIST,
  payload: axios.get(`${apiUrl}`),
});

export const getResult = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_EXAMRESULT,
    payload: axios.get(requestUrl),
  };
};

export const createResult = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_EXAMRESULT,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getResultList());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
