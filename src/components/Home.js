import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MainNav from "./MainNav";
import axios from "axios";



import {
    BrowserRouter as Router
} from "react-router-dom";

import apiKey from "../config";
import Gallery from "./Gallery";

export default function Home() {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('cats')
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => setData(response.data.photos.photo))
            .catch(error => console.log('Error fetching and parsing data', error))
            .finally(()=> setIsLoading(false))
    }, [query])

    const performSearch = (value) => setQuery(value)

        return (
            <div className="container">
                <SearchBar search={performSearch} />
                <MainNav search={performSearch} />
                <Gallery data={data} isLoading={isLoading} />
            </div>
        );

}
