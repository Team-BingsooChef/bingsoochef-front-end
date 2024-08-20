import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ToppingSlider.css";

const settings = {
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

class ToppingSlider extends Component {
  render() {
    return (
      <div className="slider_container">
        <Slider {...settings}>
          <div className="toppingpage-1">
            <label>딸기</label>
          </div>
          <div className="toppingpage-2">
            <label>초코</label>
          </div>
          <div className="toppingpage-3">
            <label>망고</label>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ToppingSlider;
