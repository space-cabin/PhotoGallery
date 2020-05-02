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
    const { photos, liked } = this.state;
    return (
      <div>
        {liked}
        {photos.map((photo) => <Photo key={photo.photo_id} photo={photo} />)}
      </div>
    );
  }
}

export default App;
