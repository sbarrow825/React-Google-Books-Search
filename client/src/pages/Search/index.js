import React, { useState, useRef, useEffect } from 'react'
import { useBookContext } from "../../utils/GlobalState"
import API from "../../utils/API"

function SearchPage() {

    const [state, dispatch] = useBookContext()

    const [searchResults, setSearchResults] = useState([])
}