import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from "react-native";

import { connect } from "react-redux";

class Books extends Component {    
    render() {
        const { books } = this.props;

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
                                <Text style={styles.name}>{book.name}</Text>
                                <Text style={styles.author}>{book.author}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
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
        
    }
});

const mapStateToProps = (state) => ({
    books: state.bookReducer.books
});

export default connect(mapStateToProps)(Books);
