import axios from 'axios';

import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type.util';

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

const apiUrl = 'api-exam/v1/exam';

// Actions

export const getExamList = () => ({
  type: ACTION_TYPES.FETCH_EXAM_LIST,
  payload: axios.get(`${apiUrl}`),
});

export const getExam = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_EXAM,
    payload: axios.get(requestUrl),
  };
};

export const createExam = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_EXAM,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getExamList());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
