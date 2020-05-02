import React from 'react';

const photo = ({ photo }) => {
  const { url } = photo;
  return (
    <div>
      <img className="image" src={url} />
    </div>
  );
};

export default photo;
