import React from 'react';

const photo = (props) => (
  <div>
    <img className="image" src={props.photo.url}></img>
  </div>
);

export default photo;
