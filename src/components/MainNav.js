import React from 'react'
import {NavLink, Route} from "react-router-dom";

const MainNav = ({match}) => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to={`${match}/`}>Cats</NavLink></li>
            <li><NavLink to={`${match}/`}>Dogs</NavLink></li>
            <li><NavLink to={`${match}/`}>Computers</NavLink></li>
        </ul>
    </nav>

// <Route path={`${match.path}/cats`} render={ () =>/> } />

)

export default MainNav