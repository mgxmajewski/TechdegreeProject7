import React from 'react';
import Picture from "./Picture";
import NoPictures from "./NoPictures";


const Gallery = props => {
    const picture = props.data.pictures
    // console.log(picture)
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
                { pictures }
            </ul>
            {/*<div>*/}
            {/*    {*/}
            {/*        (props.data.loading)*/}
            {/*            ? <p>Loading...</p>*/}
            {/*            : <Gallery data={props} />*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}
export default Gallery;
