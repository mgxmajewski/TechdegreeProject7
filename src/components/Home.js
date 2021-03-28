import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MainNav from "./MainNav";
import axios from "axios";
import { useHistory } from "react-router-dom";

import apiKey from "../config";
import Gallery from "./Gallery";

export default function Home() {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('cats')
    const [isLoading, setIsLoading] = useState(true)
    const performSearch = (value) => setQuery(value)
    const history = useHistory()
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

    useEffect( () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => setData(response.data.photos.photo))
            .catch(error => console.log('Error fetching and parsing data', error))
            .finally(()=> setIsLoading(false))
    }, [query])

    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
            // https://flaviocopes.com/how-to-get-last-item-path-javascript/
            console.log(typeof location.pathname)
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
