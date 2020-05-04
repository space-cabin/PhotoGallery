import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      photos: [],
    };
  }

  componentDidMount() {
    const listingId = 1;
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

  render() {
    const { photos } = this.state;
    if (photos.length > 0) {
      return (
        <div className="gallery">
          <div className="container">
            <div className="round-corner">
              <div className="left-half">
                <div className="firstcolumn">
                  <Photo className="photo photo-0" photo={photos[0]} />
                </div>
              </div>
              <div className="right-half">
                <div className="secondcolumn">
                  <Photo className="photo photo-1" photo={photos[1]} />
                  <div className="border"></div>
                  <Photo className="photo photo-2" photo={photos[2]} />
                </div>
                <div className="thirdcolumn">
                  <Photo className="photo photo-3" photo={photos[3]} />
                  <div className="border"></div>
                  <Photo className="photo photo-4" photo={photos[4]} />
                  <button className="show-all">Show all photos</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="gallery"></div>
    );
  }
}

export default App;
