import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    this.props.handleClick(target.id);
  }

  render() {
    const { photo, className, index } = this.props;
    const style = {
      backgroundImage: `url(${photo.url})`,
    };
    return (
      <div className="photo-container">
        <div className={className} style={style} id={index} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Photo;
