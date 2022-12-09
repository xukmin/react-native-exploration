import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "book",
    initialState: {
        books: [],
    },
    reducers: {
        addBook: (state, book) => {
            state.books.push(book);
        }
    }
})

export const { addBook } = bookSlice.actions;