import React from 'react';

const Picture = props => (
    <li className="picture-wrap">
        <img src={props.url} alt=""/>
    </li>
);

export default Picture;
