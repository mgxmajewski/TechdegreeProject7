import React from 'react';

const Gallery = props => (
    <div className="photo-container">
        <h2>Gallery</h2>
        <ul>
            <li>
                <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
                     alt=""/>
            </li>
        </ul>
        {/*{*/}
        {/*    (this.state.loading)*/}
        {/*        ? <p>Loading...</p>*/}
        {/*        : <GifList data={this.state.gifs} />*/}
        {/*}*/}
    </div>
)

export default Gallery;
