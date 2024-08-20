import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";
import "./SliderComponent.css";

const settings = {
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

class SliderComponent extends Component {
  render() {
    return (
      <div className="slider_container">
        <Slider {...settings}>
          <div className="slide_item">
            <label>딸기 빙수</label>
            <img src={strawberry} alt="Strawberry Bingsoo" />
          </div>
          <div className="slide_item">
            <label>초코 빙수</label>
            <img src={chocolate} alt="Chocolate Bingsoo" />
          </div>
          <div className="slide_item">
            <label>망고 빙수</label>
            <img src={mango} alt="Mango Bingsoo" />
          </div>
          <div className="slide_item">
            <label>민트초코 빙수</label>
            <img src={mincho} alt="Mint Chocolate Bingsoo" />
          </div>
          <div className="slide_item">
            <label>말차 빙수</label>
            <img src={malcha} alt="Matcha Bingsoo" />
          </div>
          <div className="slide_item">
            <label>연유 빙수</label>
            <img src={milk} alt="Milk Bingsoo" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderComponent;
