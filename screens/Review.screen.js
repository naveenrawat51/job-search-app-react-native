import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

export default function ReviewScreen() {
    return (
        <View>
            <Text>Review Screen</Text>
        </View>
    );
}

export const ReviewScreenOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Add"
                        iconName={
                            Platform.OS === 'android'
                                ? 'md-settings'
                                : 'ios-settings'
                        }
                        onPress={() => navigation.navigate('Setting')}
                    />
                </HeaderButtons>
            );
        },
    };
};

const styles = StyleSheet.create({});
