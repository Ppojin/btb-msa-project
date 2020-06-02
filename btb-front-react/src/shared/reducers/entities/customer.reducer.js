import axios from 'axios';

import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type.util';

export const ACTION_TYPES = {
  FETCH_CUSTOMER: 'customer/FETCH_CUSTOMER',
  SIGN_IN: 'customer/SIGN_IN',
  SIGN_UP: 'customer/SIGN_UP',
  RESET: 'customer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: {},
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export default ((state = initialState, action)=> {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CUSTOMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.SIGN_UP):
    case REQUEST(ACTION_TYPES.SIGN_IN):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CUSTOMER):
    case FAILURE(ACTION_TYPES.SIGN_UP):
    case FAILURE(ACTION_TYPES.SIGN_IN):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUSTOMER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUSTOMER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.SIGN_UP):
    case SUCCESS(ACTION_TYPES.SIGN_IN):
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
})

const apiUrl = 'http://localhost:8011/api-user';

// Actions
export const signup = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.SIGN_UP,
    payload: axios.post(`${apiUrl}/signup`, cleanEntity(entity)),
  });
  // dispatch(signup());
  console.log("where to go?");
  return result;
};

export const signin = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.SIGN_IN,
    payload: axios.post(`${apiUrl}/signin`, cleanEntity(entity)),
  });
  dispatch(getUser());
  return result;
};

export const getUser = (id, token) => {
  const requestUrl = `${apiUrl}/v1/users/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CUSTOMER,
    payload: axios({
      method: 'get',
      url: requestUrl,  
      headers: {
        'Authorization': `Bearer ${token}`,
        // 'Access-Control-Allow-Origin':'*'
      }
    }),
  };
};
