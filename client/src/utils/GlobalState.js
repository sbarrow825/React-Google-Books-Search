import React, { createContext, useReducer, useContext } from "react";
import {
    SAVE_BOOK,
    REMOVE_BOOK,
    UPDATE_BOOKS,
    UPDATE_CURRENT_BOOK
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
        case UPDATE_BOOKS:
            return {
                ...state,
                savedBooks: action.savedBooks
            }
        case UPDATE_CURRENT_BOOK:
            return {
                currentBook: action.currentBook
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
        }
    });

    return <Provider value={[state, dispatch]} />
}

const useBookContext = () => {
    return useContext(BookContext);
}

export { BookProvider, useBookContext };