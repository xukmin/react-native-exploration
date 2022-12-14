import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import { addBook } from "./bookSlice";

const initialState = {
    name: "",
    author: "",
};

class Books extends Component {  
    state = initialState;

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value,
        })
    };

    addBookToStore = () => {
        this.props.store.dispatch(addBook(this.state));
        this.setState(initialState);
    };

    render() {
        const { books } = this.props.store.getState();

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Books</Text>
                <ScrollView 
                    style={styles.booksContainer}
                    keyboardShouldPersistTaps="always"
                >
                    {
                        books.map((book, index) => (
                            <View style={styles.book} key={index}>
                                <Text style={styles.name}>{book.payload.name}</Text>
                                <Text style={styles.author}>{book.payload.author}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            value={this.state.name}
                            style={styles.input}
                            placeholder={"Book name"}
                            placeholderTextColor={"grey"}
                            onChangeText={(value) => this.updateInput("name", value)}/>
                        <TextInput 
                            value={this.state.author}
                            style={styles.input}
                            placeholder={"Book author"}
                            placeholderTextColor={"grey"}
                            onChangeText={(value) => this.updateInput("author", value)}/>
                        </View>
                        <TouchableOpacity onPress={this.addBookToStore}>
                            <View style={styles.addButtonContainer}>
                                <Text style={styles.addButton}>+</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    booksContainer: {
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        flex: 1,
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: "center",
    },
    book: {
        padding: 20,
    },
    name: {
        fontSize: 18,
    },
    author: {
        fontSize: 14,
        
    },
    inputContainer: {
        padding: 10,
        backgroundColor: "#ffffff",
        borderTopColor: "#ededed",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100,
    },
    inputWrapper: {
        flex: 1,
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: "#ededed",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5,
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28,
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: "#ededed",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }
});

export default Books;
