import React from 'react'
import { useBookContext } from "../../utils/GlobalState"
import { UPDATE_SEARCH_RESULTS } from "../../utils/actions"

function Navbar() {

    const [state, dispatch] = useBookContext()

    const clearSearches = () => {
        dispatch({type: UPDATE_SEARCH_RESULTS, searchResults: null})
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand title-text" href="#">Google Books with React</a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="/search" className="nav-link font-weight-bold title-text" onClick={clearSearches}>Search for Books</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/saved" className="nav-link font-weight-bold title-text">Saved Books</a>
                    </li>
                </ul>
        </nav>
    )
}