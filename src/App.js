import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import MainNav from "./components/MainNav";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";

import apiKey from "./config";

class App extends Component {
    render() {
        return (
            <Router>
                <SearchBar />
                <MainNav />
            </Router>
        );
    }
}

export default App;
