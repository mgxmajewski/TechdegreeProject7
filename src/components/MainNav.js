import React from 'react'
import {NavLink, Redirect, Route} from "react-router-dom";
import Home from "./Home";

class MainNav extends React.Component {


    handleClick = (e) => {
        e.preventDefault()
        // let path = `/${e.target.innerText}`
        // this.props.history.push(path)
        this.props.search(e.target.innerText)
        // console.log(e.target)
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li onClick={this.handleClick}><NavLink to={`/cats`}>cats</NavLink></li>
                    <li onClick={this.handleClick}><NavLink to={`/dogs`}>dogs</NavLink></li>
                    <li onClick={this.handleClick}><NavLink to={`/computers`}>computers</NavLink></li>
                </ul>
            </nav>



        );
    }
}

export default MainNav