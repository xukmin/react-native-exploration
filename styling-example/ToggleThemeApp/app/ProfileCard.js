import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                                source={require('./leaf.png')} />
                    </View>
                    <View>
                        <Text style={styles.name}>
                            {profileName}
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            {profileOccupation}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const profileCardColor = 'dodgerblue';
const profileName = 'Emma Doe';
const profileOccupation = 'React Native Developer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        borderRadius: 20,
        paddingTop: 15
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 60,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 60,
    },
    name: {
        color: 'white',
        marginTop: 30,
        textShadowRadius: 4,
        textShadowColor: 'red',
        textShadowOffset: {width: -2, height: -2}
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        marginTop: 10,
        fontStyle: 'italic'
    }
})