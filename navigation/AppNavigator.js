import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './JobSeachNavigator';

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
