import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { clearJobLiked } from '../store/actions/job.action';

export default function SettingScreen() {
    const dispatch = useDispatch();

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Button
                title="Reset Liked Jobs"
                onPress={() => dispatch(clearJobLiked())}
            />
        </View>
    );
}
