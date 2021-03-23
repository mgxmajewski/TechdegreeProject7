import React, { Component } from 'react';
import Home from "./components/Home";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const App = () => (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
)

export default App;
