import React from 'react';

const carousel = ({ photo, index }) => {
  const style = {
    backgroundImage: `url(${photo.url})`,
  };
  return (
    <div className={`carousel-image image-${index}`}>
      <div style={style} alt={index} />
    </div>
  );
};

export default carousel;
