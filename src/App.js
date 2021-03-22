import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import MainNav from "./components/MainNav";
import axios from "axios";
import GifList from "./components/GifList";
import {
    BrowserRouter as Router
} from "react-router-dom";

import apiKey from "./config";

class App extends Component {

    constructor() {
        super()
        this.state = {
            gifs: [],
            loading: true
        }
    }

    componentDidMount() {
        this.performSearch()
    }

    performSearch = (query = 'cats') => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=8kPPAvSPwZGTj0QyLzVO7ovMegXe79v5&q=${query}&limit=24&offset=0&rating=g&lang=en`)
            .then(response => {
                this.setState({
                    gifs: response.data.data,
                    loading: false
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error)
            })
    }


    render() {
        return (
            <Router>
                <SearchBar />
                <MainNav />
                <div className="photo-container">
                    {
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <GifList data={this.state.gifs} />
                    }
                </div>

            </Router>
        );
    }
}

export default App;
