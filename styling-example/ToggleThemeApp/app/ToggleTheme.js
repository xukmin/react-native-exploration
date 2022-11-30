import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            themeIndex: 0
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        let index = this.state.themeIndex + 1;
        if (index == Colors.length) {
            index = 0;
        }
        this.setState({themeIndex: index});
    }

    render() {
        //const { darkTheme } = this.state;
        //const styles = getStyleSheet(darkTheme);
        //const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor; // FIXME
        const backgroundColor = Colors[this.state.themeIndex];
        const reverseColor = ReverseColors[this.state.themeIndex];

        //const buttonTextColor = StyleSheet.flatten(styles.box).borderColor;

        return (
            <View style={[baseContainerStyle, {backgroundColor: backgroundColor}]}>
                <View style={[baseBoxStyle, {borderColor: reverseColor}]}>
                    <Button title={backgroundColor}
                            onPress={this.toggleTheme}
                            color={reverseColor} />
                </View>

            </View>
        )
    }
}

const Colors = ['black', 'white', 'blue', 'green'];
const ReverseColors = ['white', 'black', 'green', 'blue'];

const baseContainerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

/*
const Colors = {
    dark: 'black',
    light: 'white'
};

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyle,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyle,
        borderColor: 'black'
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyle,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyle,
        borderColor: 'black'
    }
});

function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
*/

