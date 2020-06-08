import axios from 'axios';

// import { cleanEntity } from 'shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type.util';
// import axiosMiddleware from 'redux-axios-middleware';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';


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
      console.log(action, state)
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.SIGN_UP):
    case REQUEST(ACTION_TYPES.SIGN_IN):
      console.log(action, state)
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CUSTOMER):
    case FAILURE(ACTION_TYPES.SIGN_UP):
    case FAILURE(ACTION_TYPES.SIGN_IN):
      console.log(action, state)
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUSTOMER_LIST):
      console.log(action, state)
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_CUSTOMER):
      console.log(action, state)
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.SIGN_UP):
      console.log(action, state)
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.SIGN_IN):
      console.log(action.payload)
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        // entity: action.payload.data,
        headers: action.payload.headers,
        // headers: action.payload.data,
      };
    case ACTION_TYPES.RESET:
      console.log(action, state)
      return {
        ...initialState,
      };
    default:
      console.log(action, state)
      return state;
  }
})

require('dotenv').config()
const apiUrl = `http://${process.env.REACT_APP_APIHOST}/api-user`;

const signupAPI = (entity => axios.post(`${apiUrl}/signup`, entity))
const signinAPI = (entity) => axios.post(`${apiUrl}/signin`, entity)
// const getCustomerAPI = (id, token) => axios.get(`${apiUrl}/v1/users/${id}`, null, {headers: {'Authorization': `Bearer ${token}`,}});
const getCustomerAPI = (id, token) => axios({
  mehtod: "post",
  url: `${apiUrl}/v1/users/${id}`, 
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

// Actions
export const signup = entity => dispatch => {
  dispatch({type: REQUEST(ACTION_TYPES.SIGN_IN)})
  return signupAPI(entity).then(response => {
      dispatch({
        type: SUCCESS(ACTION_TYPES.SIGN_IN),
        payload: response,
      })
  }).catch(error => {
    dispatch({
      type: FAILURE(ACTION_TYPES.SIGN_IN),
      payload: error,
    })
  })
}

// export const signup = entity => async dispatch => {
//   const result = await dispatch({
//     type: ACTION_TYPES.SIGN_UP,
//     payload: axios.post(`${apiUrl}/signin`, entity),
//   });
//   return result;
// };

export const signin = entity => dispatch => {
  dispatch({type: REQUEST(ACTION_TYPES.SIGN_IN)})
  return signinAPI(entity).then(response => {
      dispatch({
        type: SUCCESS(ACTION_TYPES.SIGN_IN),
        payload: response,
      })
  }).catch(error => {
    dispatch({
      type: FAILURE(ACTION_TYPES.SIGN_IN),
      payload: error,
    })
  })
}

// export const signin = entity => async dispatch => {
//   const result = await dispatch({
//     type: ACTION_TYPES.SIGN_IN,
//     payload: axios.post(`${apiUrl}/signin`, cleanEntity(entity)),
//   });
//   dispatch(getCustomer());
//   return result;
// };

export const getCustomer = (id, token) => dispatch => {
  dispatch({type: REQUEST(ACTION_TYPES.FETCH_CUSTOMER)})
  return getCustomerAPI(id, token).then(
    response => {
      dispatch({
        type: SUCCESS(ACTION_TYPES.FETCH_CUSTOMER),
        payload: response
      })
    }
  ).catch(error => {
    dispatch({
      type: FAILURE(ACTION_TYPES.FETCH_CUSTOMER),
      payload: error
    })
  })
}

// export const getCustomer = (id, token) => {  
//   return {
//     type: ACTION_TYPES.FETCH_CUSTOMER,
//     payload: axios.get(requestUrl, null, {headers: {'Authorization': `Bearer ${token}`,}}),
//   };
// };

// const store = createStroe(
//   reducer,
//   applyMiddleware(thunk)
// );

// dispatch(getCustomer)