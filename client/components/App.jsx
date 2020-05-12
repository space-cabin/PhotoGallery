import React from 'react';
import axios from 'axios';

import Photo from './Photo';
import Gallery from './Gallery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: null,
      liked: false,
      photos: [],
      galleryView: false,
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.viewClickHandler = this.viewClickHandler.bind(this);
    this.showAllPhotos = this.showAllPhotos.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount() {
    let listingId;
    if (window.location.pathname === '/index.html/') {
      listingId = 0;
    } else {
      listingId = window.location.pathname.slice(1);
      listingId = listingId.slice(0, listingId.length - 1);
    }
    if (Number(listingId) !== 'NaN') {
      axios.get(`/photos/${listingId}`)
        .then(({ data }) => {
          this.setState({
            _id: data[0]._id,
            liked: data[0].liked,
            photos: data[0].photos,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleClick(target) {
    this.setState({
      galleryView: true,
      index: Number(target),
    });
  }

  viewClickHandler(value) {
    if (value === 'close') {
      this.setState({ galleryView: false });
    } else {
      this.setState({ index: value });
    }
  }

  showAllPhotos() {
    this.setState({
      galleryView: true,
      index: 0,
    });
  }

  toggleLike() {
    const { liked, _id } = this.state;
    axios({
      method: 'patch',
      url: '/update',
      data: {
        id: _id,
        liked: !liked,
      },
    })
      .then(() => {
        this.setState({ liked: !liked });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      liked, photos, galleryView, index,
    } = this.state;
    if (photos.length > 0 && !galleryView) {
      return (
        <div className="photo-gallery">
          <div className="main-header">
            <div className="share-container">
              <i className="fas fa-external-link-alt" />
              <p>Share</p>
            </div>
            <div className="liked" id="like-btn" onClick={this.toggleLike}>
              <div className="liked-container">
                {liked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
                <p>Save</p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="container">
              <div className="round-corner">
                <div className="left-half">
                  <div className="first-column">
                    <Photo className="photo photo-0" index="0" photo={photos[0]} handleClick={this.handleClick} />
                  </div>
                </div>
                <div className="right-half">
                  <div className="second-column">
                    <Photo className="photo photo-1" index="1" photo={photos[1]} handleClick={this.handleClick} />
                    <div className="border" />
                    <Photo className="photo photo-2" index="2" photo={photos[2]} handleClick={this.handleClick} />
                  </div>
                  <div className="third-column">
                    <Photo className="photo photo-3" index="3" photo={photos[3]} handleClick={this.handleClick} />
                    <div className="border" />
                    <Photo className="photo photo-4" index="4" photo={photos[4]} handleClick={this.handleClick} />
                    <button type="submit" className="show-all" id="all-photos" onClick={this.showAllPhotos}>
                      View Photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (photos.length > 0 && galleryView) {
      return (
        <div className="gallery-view-container">
          <Gallery index={index} photos={photos} liked={liked} viewClickHandler={this.viewClickHandler} toggleLike={this.toggleLike} />
        </div>
      );
    }
    return (
      <div className="gallery" />
    );
  }
}

export default App;
