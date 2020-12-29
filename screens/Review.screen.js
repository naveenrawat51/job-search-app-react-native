import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Text, Button, Icon } from 'react-native-elements';

export default function ReviewScreen() {
    const likedJobs = useSelector((state) => state.jobs.likedJobs);
    console.log('likedJobs: ', likedJobs.length);

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
                title="APPLY NOW"
            />
        </Card>
    );

    return (
        <FlatList
            data={likedJobs}
            keyExtractor={(item) => item.jobId}
            renderItem={({ item }) => renderCard(item)}
        />
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
