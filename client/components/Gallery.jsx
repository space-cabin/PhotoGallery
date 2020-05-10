import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.clickHandler = this.clickHandler.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  clickHandler({ target }) {
    const { index, viewClickHandler, photos } = this.props;
    if (target.id === 'right') {
      if (index === photos.length - 1) {
        viewClickHandler(0);
      } else {
        viewClickHandler(index + 1);
      }
    }
    if (target.id === 'left') {
      if (index === 0) {
        viewClickHandler(photos.length - 1);
      } else {
        viewClickHandler(index - 1);
      }
    }
    if (target.id === 'close') {
      viewClickHandler('close');
    }
  }

  toggleLike() {
    const { toggleLike } = this.props;
    toggleLike();
  }

  render() {
    const { index, photos, liked } = this.props;
    const idx = Number(index);
    const { length } = photos;
    return (
      <div className="gallery-view">
        <div className="header">
          <button className="close-btn" id="close" type="submit" onClick={this.clickHandler}>
            <div className="x-1" />
            <div className="x-2" />
          </button>
          <div className="mini-gallery">
            <div className="mini-carousel">

            </div>
          </div>
          <div className="page">
            <p className="page-current">{idx + 1}</p>
            <p className="page-border">/</p>
            <p className="page-total">{length}</p>
          </div>
          <div className="view-description">
            <p>{photos[index].description}</p>
          </div>
        </div>
        <div className="photo-booth">
          <button className="left-btn" id="left" type="submit" onClick={this.clickHandler}>
            <div className="left-1" />
            <div className="left-2" />
          </button>
          <div className="main-photo-container">
            <img className="main-photo" src={photos[index].url} id={index} alt={photos[index].description} />
          </div>
          <button className="right-btn" id="right" type="submit" onClick={this.clickHandler}>
            <div className="right-1" />
            <div className="right-2" />
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
