import React from 'react'
import Jumbotron from "../../components/Jumbotron"
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"

function SearchPage() {
    return (
        <div>
            <Jumbotron/>
            <SearchBar/>
            <BookList/>
        </div>
    )
}

export default SearchPage