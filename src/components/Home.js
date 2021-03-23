import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import MainNav from "./MainNav";
import axios from "axios";



import {
    BrowserRouter as Router
} from "react-router-dom";

import apiKey from "../config";
import Gallery from "./Gallery";

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            pictures: [],
            loading: true,
        }
    }

    componentDidMount() {
        let query = this.props.location.pathname
        if (query === '/') {
            this.performSearch('cats')
        } else {
            this.performSearch(query)
        }
        console.log('query:' + query)
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pictures: response.data.photos.photo,
                    loading: false,
                })
                // console.log(this.state.pictures)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error)
            })
    }

    render() {
        return (
            <div>
                <SearchBar search={this.performSearch}/>
                <MainNav />
                <Gallery data={this.state.pictures} />
            </div>
        );
    }
}
