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
          <div className="left-half">
            <div className="firstcolumn">
              <Photo photo={photos[0]} />
            </div>
          </div>
          <div className="right-half">
            <div className="secondcolumn">
              <Photo photo={photos[1]} />
              <Photo photo={photos[2]} />
            </div>
            <div className="thirdcolumn">
              <Photo photo={photos[3]} />
              <Photo photo={photos[4]} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="gallery"></div>
    );

    // return (
    //   <div className="gallery">
    //     {liked}
    //     {console.log(photos)}
    //     {photos.map((photo, idx) => <Photo key={photo.photo_id} index={idx} photo={photo} />)}
    //   </div>
    // );
  }
}

export default App;
