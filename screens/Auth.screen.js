import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { facebookLogin } from '../store/actions/auth.action';

export default function AuthScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(facebookLogin());
    }, []);

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Auth Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
