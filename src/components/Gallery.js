import React from 'react';
import Picture from "./Picture";
import NoPictures from "./NoPictures";


const Gallery = props => {
    const picture = props.data
    const pictureSize = 'm'
    let pictures

    if (picture.length > 0) {
        pictures = picture.map(picture => <Picture url={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${pictureSize}.jpg`}
                                                   key={picture.id}/>)
    } else {
        pictures = <NoPictures/>
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pictures}
            </ul>
        </div>
    )
}

export default Gallery;
