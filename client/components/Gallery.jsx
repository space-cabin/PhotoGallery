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
    const index = Number(document.querySelector('.main-photo').id);
    const { viewClickHandler } = this.props;
    if (target.id === 'right') {
      viewClickHandler(index + 1);
    }
    if (target.id === 'left') {
      viewClickHandler(index - 1);
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
    const length = photos.length;
    return (
      <div className="gallery-view">
        <div className="header">
          <button className="close-btn" id="close" type="submit" onClick={this.clickHandler}>
            <i className="fas fa-times" />
            <p>Close</p>
          </button>
          <div className="page">
            <p>
              {idx + 1}
              /
              {length}
            </p>
          </div>
          <div className="view-like-share-container">
            <div className="view-share-container">
                <i className="fas fa-external-link-alt" />
            </div>
            <button className="view-liked" type="submit" onClick={this.toggleLike}>
              {liked ? (
                <div className="view-liked-container">
                  <i className="fas fa-heart" />
                </div>
              ) : (
                <div className="view-liked-container">
                  <i className="far fa-heart" />
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="photo-booth">
          {idx !== 0 ? (
            <button className="left-btn" id="left" type="submit" onClick={this.clickHandler}>
              <i className="fas fa-chevron-left" />
            </button>
          ) : null}
          <div className="main-photo-container">
            <img className="main-photo" src={photos[index].url} id={index} alt={photos[index].description} />
          </div>
          {idx !== length - 1 ? (
            <button className="right-btn" id="right" type="submit" onClick={this.clickHandler}>
              <i className="fas fa-chevron-right" />
            </button>
          ) : null}
        </div>
        <div className="view-description">
          <p>{photos[index].description}</p>
        </div>
      </div>
    );
  }
}

export default Gallery;
