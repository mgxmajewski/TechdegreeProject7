import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
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
           </Router>
        );
    }
}

export default App;
