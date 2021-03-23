import React from 'react'
import {NavLink} from "react-router-dom";

class MainNav extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        // let path = `/${e.target.innerText}`
        this.props.search(e.target.innerText)
        // this.props.history.push(path)
        // console.log(e.target)
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li onClick={this.handleClick}><NavLink to={`/cats`}>Cats</NavLink></li>
                    <li onClick={this.handleClick}><NavLink to={`/dogs`}>Dogs</NavLink></li>
                    <li onClick={this.handleClick}><NavLink to={`/computers`}>Computers</NavLink></li>
                </ul>
            </nav>

// <Route path={`${match.path}/cats`} render={ () =>/> } />

        );
    }
}

export default MainNav