import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthScreen from '../screens/Auth.screen';
import WelcomeScreen from '../screens/Welcome.screen';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Auth">
            <Tab.Screen name="Auth" component={AuthScreen} />
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
        </Tab.Navigator>
    );
};
