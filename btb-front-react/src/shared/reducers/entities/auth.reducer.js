// import axios from  'axios';

export const ACTION_TYPES = {
    SET_AUTH_STATUS: 'auth/SET_AUTH',
};

const initialState = {
    token: "",
    customerpk: "",
};

export default ((state = initialState, action) => {
    switch (action.type) {
        case (ACTION_TYPES.SET_AUTH_STATUS):
            return action.payload;
        default:
            return state;
    }
})

export const setAuth = entity => {
    return {
        type: ACTION_TYPES.SET_AUTH_STATUS,
        payload: entity
    }
};