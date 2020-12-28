import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slides from '../components/Slides';
import { useSelector, useDispatch } from 'react-redux';
import { facebookLogin } from '../store/actions/auth.action';

const SLIDE_DATA = [
    {
        id: 1,
        text: 'Welcome to job App',
        color: '#03A9F4',
    },
    {
        id: 2,
        text: 'Use this to get a job',
        color: '#009688',
    },
    {
        id: 3,
        text: 'Set your location, then swipe away',
        color: '#03A9F4',
    },
];

export default function WelcomeScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const onCompleteHandler = () => {
        dispatch(facebookLogin(false));
    };

    useEffect(() => {
        dispatch(facebookLogin(true));
    }, []);

    return <Slides data={SLIDE_DATA} onComplete={onCompleteHandler} />;
}

export const WelcomeScreenOptions = {
    tabBarVisible: false,
};

const styles = StyleSheet.create({});
