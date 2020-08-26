import React, { createContext, useReducer, useContext } from "react";
import {
    SAVE_BOOK,
    REMOVE_BOOK,
    UPDATE_SAVED_BOOKS,
    UPDATE_CURRENT_BOOK,
    UPDATE_SEARCH_RESULTS
} from "./actions";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_BOOK:
            return {
                ...state,
                savedBooks: [action.book, ...state.savedBooks]
            }
        case REMOVE_BOOK:
            return {
                ...state,
                savedBooks: state.savedBooks.filter((book) => {
                    return book._id !== action._id;
                })
            }
        case UPDATE_SAVED_BOOKS:
            return {
                ...state,
                savedBooks: action.savedBooks
            }
        case UPDATE_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.currentBook
            }
        case UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.searchResults
            }
        default:
            return state
    }
}

const BookProvider = () => {
    const [state, dispatch] = useReducer(reducer, {
        savedBooks: [],
        currentBook: {
            _id: 0,
            title: "",
            authors: [],
            description: "",
            image: "",
            link: ""
        },
        searchResults: null
    });

    return <Provider value={[state, dispatch]} />
}

const useBookContext = () => {
    return useContext(BookContext);
}

export { BookProvider, useBookContext };