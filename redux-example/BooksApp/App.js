import React, { Component } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import rootReducer from "./src/reducers/index";
import Books from "./src/Books";

const store = configureStore({ reducer: rootReducer });

export default class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <Books />
            </Provider>
        )
    }   
}