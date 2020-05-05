import React from 'react';

const gallery = ({ index, photos, liked }) => (
<div className="gallery-view">  
  <div className="header">
    <div className="close-btn">
      <i className="fas fa-times" />
      <p>Close</p>
    </div>
    <div className="page">
      <p>
        {Number(index) + 1}
        /
        {photos.length}
      </p>
    </div>
    <div className="view-liked">
      {liked ? (
        <div className="view-liked-container">
          <i className="fas fa-heart" />
        </div>
      ) : (
        <div className="view-liked-container">
          <i className="far fa-heart" />
        </div>
      )}
    </div>
  </div>
  <div className="photo-booth">
    <div className="left-btn">
      <i className="fas fa-chevron-left" />
    </div>
    <div className="main-photo">
      <img src={photos[index].url} alt={photos[index].description} />
    </div>
    <div className="right-btn">
      <i className="fas fa-chevron-right" />
    </div>
  </div>
  <div className="view-description">
    <p>{photos[index].description}</p>
  </div>
</div>
);

export default gallery;
