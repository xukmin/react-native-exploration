import React, { Component } from "react";
import { configureStore } from "@reduxjs/toolkit";
//import { Provider } from "react-redux";

import Books from "./src/Books";
import { bookSlice } from "./src/bookSlice"

const store = configureStore({
    reducer: bookSlice.reducer
});

export default class App extends Component {
    render() {
        return (
            <Books store={store}/>
        )
    } 
}