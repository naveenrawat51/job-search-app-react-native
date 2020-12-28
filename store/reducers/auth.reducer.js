import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';
import { AsyncStorage } from 'react-native';

const initialState = {
    token: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
            };
        case FACEBOOK_LOGIN_FAIL:
            return {
                ...state,
                token: null,
            };
    }
    return state;
}
