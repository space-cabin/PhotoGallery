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
          <div className="close-btn" id="close" onClick={this.clickHandler}>
            <i className="fas fa-times" />
            <p>Close</p>
          </div>
          <div className="page">
            <p>
              {idx + 1}
              /
              {length}
            </p>
          </div>
          <div className="view-liked" onClick={this.toggleLike}>
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
          {idx !== 0 ? (
            <div className="left-btn" id="left" onClick={this.clickHandler}>
              <i className="fas fa-chevron-left" />
            </div>
          ) : null}
          <div className="main-photo-container">
            <img className="main-photo" src={photos[index].url} id={index} alt={photos[index].description} />
          </div>
          {idx !== length - 1 ? (
            <div className="right-btn" id="right" onClick={this.clickHandler}>
              <i className="fas fa-chevron-right" />
            </div>
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
