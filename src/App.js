import React from 'react';
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/dogs" component={Home} />
            <Route path ="/cats" component={Home} />
            <Route path ="/computers" component={Home} />
            <Route path ="/search/:query" component={Home} />
            <Route component={NotFound} />
            {/*<Route path="/:param" render { () => <Home param={}/> } />*/}
        </Switch>
    </Router>
)

export default App;
