import { FACEBOOK_LOGIN_SUCCESS } from '../actions/types';
import { AsyncStorage } from 'react-native';

const initialState = {};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            AsyncStorage.removeItem('fb_token');
            return state;
    }
    return state;
}
