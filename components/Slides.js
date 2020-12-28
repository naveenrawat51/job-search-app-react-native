import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Slides({ data, onComplete }) {
    const renderSlides = data.map((slide, index) => (
        <View
            key={slide.id}
            style={{ ...styles.slide, backgroundColor: slide.color }}
        >
            <Text style={styles.slideText}>{slide.text}</Text>
            {index === data.length - 1 && (
                <Button
                    title="Are you ready"
                    raised
                    buttonStyle={styles.btn}
                    onPress={onComplete}
                />
            )}
        </View>
    ));
    return (
        <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
            {renderSlides}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: SCREEN_WIDTH,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    btn: {
        backgroundColor: 'green',
    },
});
