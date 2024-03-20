import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick(e) {
    this.setState({
      active: +e.target.dataset.index,
    });
  }
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero"></img>
        <div className="carousel-smaller">
          {images.map(
            function (photo, index) {
              return (
                // eslint-disable-next-line
                <img
                  key={photo}
                  src={photo}
                  data-index={index}
                  onClick={this.handleIndexClick.bind(this)}
                  className={index === active ? "active" : ""}
                  alt="animal thumbnail"
                />
              );
            }.bind(this)
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
