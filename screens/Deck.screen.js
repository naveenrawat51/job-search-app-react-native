import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import Swipe from '../components/Swipe';
import MapView from 'react-native-maps';

export default function DeckScreen() {
    const jobs = useSelector((state) => state.jobs.jobs);
    const dispatch = useDispatch();

    const renderCard = (item) => (
        <Card key={item.jobId}>
            <Text
                numberOfLines={1}
                h3
                style={{ marginVertical: 10, fontWeight: 'bold' }}
            >
                {item.title}
            </Text>
            <Text style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Company:</Text>{' '}
                {item.companyName}
            </Text>
            <Text style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Skills:</Text>{' '}
                {item.tagsAndSkills}
            </Text>
            <Text style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Posted:</Text>{' '}
                {item.footerPlaceholderLabel}
            </Text>
            <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                }}
                title="VIEW NOW"
            />
        </Card>
    );

    const noMoreCards = () => {
        return (
            <Card>
                <Text style={{ marginVertical: 10 }}>No more cards!!</Text>
            </Card>
        );
    };

    return (
        <View style={styles.container}>
            <Swipe
                data={jobs}
                renderCard={renderCard}
                noMoreCards={noMoreCards}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
    },
});
