import React, { useEffect } from "react"
import { useBookContext } from "../../utils/GlobalState"
import { UPDATE_SAVED_BOOKS } from "../../utils/actions"
import Jumbotron from "../../components/Jumbotron"
import BookList from "../../components/BookList"
import API from "../../utils/API"

function SavedPage() {

    const [state, dispatch] = useBookContext();

    useEffect(() => {
        API.getBooks().then(res => {
            dispatch({type: UPDATE_SAVED_BOOKS, savedBooks: res.data})
        })
    }, [])

    return (
        <div>
            <Jumbotron />
            <BookList />
        </div>
    )
}

export default SavedPage