import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './JobSeachNavigator';
import WelcomeScreen from '../screens/Welcome.screen';

export default function AppNavigator() {
    const isAuth = useSelector((state) => !!state.auth.token);

    return (
        <NavigationContainer>
            {!isAuth && <WelcomeScreen />}
            {isAuth && <MainTabNavigator />}
        </NavigationContainer>
    );
}
