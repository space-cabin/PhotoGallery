import React from 'react';

const photo = ({ photo }) => {
  const style = {
    backgroundImage: `url(${photo.url})`
  };

  return (
    <div className="photo" style={style}>
 
    </div>
  );
};

export default photo;
