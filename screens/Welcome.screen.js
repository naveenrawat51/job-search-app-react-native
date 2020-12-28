import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        id: 1,
        text: 'Welcome to job App',
    },
    {
        id: 2,
        text: 'Use this to get a job',
    },
    {
        id: 3,
        text: 'Set your location, then swipe away',
    },
];

export default function WelcomeScreen() {
    return <Slides data={SLIDE_DATA} />;
}

const styles = StyleSheet.create({});
