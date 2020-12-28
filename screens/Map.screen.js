import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FACEBOOK_LOGIN_FAIL } from '../store/actions/types';

export default function MapScreen() {
    const dispatch = useDispatch();

    return (
        <View style={{ marginVertical: 100 }}>
            <Text>Map Screen</Text>
            <Button
                title="Clear Token"
                onPress={async () => {
                    await AsyncStorage.removeItem('fb_token');
                    dispatch({ type: FACEBOOK_LOGIN_FAIL });
                    console.log('token clear');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
