import React from 'react';

const NoPictures = props => (
  <li className='photo-container not-found'>
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>Sorry, no GIFs match your search.</h3>
  </li>
)

export default NoPictures;