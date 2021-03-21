import React, { Component } from 'react';

class SearchBar extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.search.value
        console.log(search)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search" ref={ (input) => this.search = input } />
                <button type="submit">Go!</button>
            </form>
        )
    }
}

export default SearchBar