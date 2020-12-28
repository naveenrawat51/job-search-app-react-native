import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../screens/Map.screen';
import DeckScreen from '../screens/Deck.screen';
import ReviewScreen, { ReviewScreenOptions } from '../screens/Review.screen';
import SettingScreen from '../screens/Setting.screen';
import Colors from '../constants/Colors';

const defaultNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const ReviewCreateStackNavigator = createStackNavigator();
export const ReviewStackNavigator = () => {
    return (
        <ReviewCreateStackNavigator.Navigator screenOptions={defaultNavOption}>
            <ReviewCreateStackNavigator.Screen
                name="myReview"
                component={ReviewScreen}
                options={ReviewScreenOptions}
            />
            <ReviewCreateStackNavigator.Screen
                name="Setting"
                component={SettingScreen}
            />
        </ReviewCreateStackNavigator.Navigator>
    );
};

const MainTab = createBottomTabNavigator();
export const MainTabNavigator = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen name="Map" component={MapScreen} />
            <MainTab.Screen name="Deck" component={DeckScreen} />
            <MainTab.Screen name="Review" component={ReviewStackNavigator} />
        </MainTab.Navigator>
    );
};
