import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MainNav from "./MainNav";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import apiKey from "../config";
import Gallery from "./Gallery";

export default function Home() {

    // Handler for empty/home route
    const defaultSearch = 'cats'
    const history = useHistory()
    // Parse url parameter https://flaviocopes.com/how-to-get-last-item-path-javascript/
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    let urlParam = getLastItem(useLocation().pathname)

    if (urlParam.length === 0) {
        urlParam = defaultSearch
        let path = `/${urlParam}`
        history.push(path)
    }

    // Add hooks to manage state of component
    const [data, setData] = useState([])
    const [query, setQuery] = useState(urlParam)
    const [isLoading, setIsLoading] = useState(true)
    const performSearch = (value) => setQuery(value)

    // Fetch from API using query parameter taken from url
    useEffect( () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => setData(response.data.photos.photo))
            .catch(error => console.log('Error fetching and parsing data', error))
            .finally(()=> setIsLoading(false))
    }, [query])

    // Listener for changes of location
    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
            performSearch(getLastItem(location.pathname))
        })
    },[history])

    return (
        <div className="container">
            <SearchBar history={history} search={performSearch} />
            <MainNav history={history} search={performSearch} />
            {
                (isLoading)
                    ? <p>isLoading</p>
                    : <Gallery data={data} isLoading={isLoading} />
            }
        </div>
    );
}
