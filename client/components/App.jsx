import React from 'react';
import axios from 'axios';
import Photo from './Photo';
import Gallery from './Gallery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      photos: [],
      galleryView: false,
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const listingId = 25;
    axios.get(`/${listingId}`)
      .then(({ data }) => {
        this.setState({
          liked: data[0].liked,
          photos: data[0].photos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(target) {
    this.setState({
      galleryView: true,
      index: target,
    });
  }

  render() {
    const {
      liked, photos, galleryView, index,
    } = this.state;
    if (photos.length > 0 && !galleryView) {
      return (
        <div className="photo-gallery">
          <div className="liked">
            {liked ? (
              <div className="liked-container">
                <i className="fas fa-heart" />
                <p>Save</p>
              </div>
            ) : (
              <div className="liked-container">
                <i className="far fa-heart" />
                <p>Save</p>
              </div>
            )}
          </div>
          <div className="gallery">
            <div className="container">
              <div className="round-corner">
                <div className="left-half">
                  <div className="firstcolumn">
                    <Photo className="photo photo-0" index="0" photo={photos[0]} handleClick={this.handleClick} />
                  </div>
                </div>
                <div className="right-half">
                  <div className="secondcolumn">
                    <Photo className="photo photo-1" index="1" photo={photos[1]} handleClick={this.handleClick} />
                    <div className="border" />
                    <Photo className="photo photo-2" index="2" photo={photos[2]} handleClick={this.handleClick} />
                  </div>
                  <div className="thirdcolumn">
                    <Photo className="photo photo-3" index="3" photo={photos[3]} handleClick={this.handleClick} />
                    <div className="border" />
                    <Photo className="photo photo-4" index="4" photo={photos[4]} handleClick={this.handleClick} />
                    <button type="submit" className="show-all" onClick={this.handleClick}>Show all photos</button>
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
          <Gallery index={index} photos={photos} liked={liked} />
        </div>
      );
    }
    return (
      <div className="gallery" />
    );
  }
}

export default App;
