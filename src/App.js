import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import MainNav from "./components/MainNav";
import axios from "axios";

import {
    BrowserRouter as Router
} from "react-router-dom";

import apiKey from "./config";
import Gallery from "./components/Gallery";

class App extends Component {

    constructor() {
        super()
        this.state = {
            pictures: [],
            loading: true
        }
    }

    componentDidMount() {
        this.performSearch()
    }

    performSearch = (query = 'cats') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pictures: response.data.photos.photo,
                    loading: false,
                })
                console.log(this.state.pictures)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error)
            })
    }


    render() {
        return (
            <Router>
                <SearchBar search={this.performSearch}/>
                <MainNav />
                <Gallery data={this.state.pictures} />
            </Router>
        );
    }
}

export default App;
