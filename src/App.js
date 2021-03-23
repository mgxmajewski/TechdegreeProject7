import React from 'react';
import Home from "./components/Home";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/:routequery" component={Home} />
        </Switch>
    </Router>
)

export default App;
