import React from 'react';

const photo = (props) => {
  const style = {
    backgroundImage: `url(${props.photo.url})`
  };

  return (
    <div className={props.className} style={style}>

    </div>
  );
};

export default photo;
