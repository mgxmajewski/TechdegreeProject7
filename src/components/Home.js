import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MainNav from "./MainNav";
import axios from "axios";
import { useHistory,useLocation } from "react-router-dom";



import {
    BrowserRouter as Router
} from "react-router-dom";

import apiKey from "../config";
import Gallery from "./Gallery";
import NotFound from "./NotFound";

export default function Home() {

    let history = useHistory()

    const [data, setData] = useState([])
    const [query, setQuery] = useState('cats')
    const [isLoading, setIsLoading] = useState(true)
    const performSearch = (value) => setQuery(value)
    const history = useHistory()

    useEffect( () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => setData(response.data.photos.photo))
            .catch(error => console.log('Error fetching and parsing data', error))
            .finally(()=> setIsLoading(false))
    }, [query])



    // const queryParam = this.props.query
    // console.log(queryParam.length)
    // console.log(queryParam.length > 0)


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
