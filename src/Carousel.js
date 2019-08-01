import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["https://via.placeholder.com/300"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handldIndexClick = evt => {
    this.setState({
      active: +evt.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, idx) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handldIndexClick}
              onKeyUp={this.handldIndexClick}
              data-index={idx}
              src={photo}
              alt="animal thumbnail"
              className={idx === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
