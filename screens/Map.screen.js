import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FACEBOOK_LOGIN_FAIL } from '../store/actions/types';
import MapView from 'react-native-maps';
import { fetchJobs } from '../store/actions/job.action';
import { Button } from 'react-native-elements';

export default function MapScreen({ navigation }) {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);

    const [mapRegion, setMapRegion] = useState({
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    });

    const onRegionChangeComplete = (region) => {
        console.log(region);
        setMapRegion(region);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={mapRegion}
                region={mapRegion}
                onRegionChangeComplete={onRegionChangeComplete}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Search This Area"
                    Icon={{ name: 'search' }}
                    onPress={() => {
                        fetchJobs(
                            dispatch,
                            {
                                lat: mapRegion.latitude,
                                lng: mapRegion.longitude,
                            },
                            () => navigation.navigate('Deck')
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginHorizontal: 100,
    },
});
