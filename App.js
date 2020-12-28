import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={() => console.log(error)}
            />
        );
    }

    return <AppNavigator />;
}
