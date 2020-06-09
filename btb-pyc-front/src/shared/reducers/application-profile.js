import axios from 'axios';

// import { SUCCESS } from 'src/shared/reducers/action-type.util';
import { SUCCESS } from './actionType.util.js';

export const ACTION_TYPES = {
    GET_PROFILE: 'applicationProfile/GET_PROFILE',
};

const initialState = {
    ribbonEnv: '',
    inProduction: true,
    isSwaggerEnabled: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.GET_PROFILE): {
            const { data } = action.payload;
            return {
                ...state,
                ribbonEnv: data['display-ribbon-on-profiles'],
                inProduction: data.activeProfiles.includes('prod'),
                isSwaggerEnabled: data.activeProfiles.includes('swagger'),
            };
        }
        default:
            return state;
    }
};

export const getProfile = () => ({
    type: ACTION_TYPES.GET_PROFILE,
    payload: axios.get('management/info'),
});
