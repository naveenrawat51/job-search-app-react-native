import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import * as Facebook from 'expo-facebook';

export const facebookLogin = (onWelcomeLoad) => async (dispatch) => {
    console.log('facebookLogin firing');
    let token = await AsyncStorage.getItem('fb_token');
    console.log('token: ', token);
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, token });
    } else {
        if (!onWelcomeLoad) {
            doFacebookLogin(dispatch);
        }
    }
};

const doFacebookLogin = async (dispatch) => {
    await Facebook.initializeAsync({
        appId: '954254675101352',
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, token });
};
