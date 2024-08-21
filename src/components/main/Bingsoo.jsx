import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";

import ice_oreo from "/src/assets/toppings/ice_oreo.svg";
const Bingsoo = () => {
  const settings = {
    centerMode: false,
    variableWidth: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    console.log("Slider initialized");
  }, []);

  return (
    <div className="bingsoo-container">
      <div className="bingsoo">
        <img src={mango} alt="빙수 이미지" />
      </div>
      <Slider {...settings}>
        <div className="topping-slider s1">
          <div className="topping-row row1">
            <img src={ice_oreo} alt="토핑 1" />
          </div>
          <div className="topping-row row2">
            <img src={ice_oreo} alt="토핑 2" />
            <img src={ice_oreo} alt="토핑 3" />
            <img src={ice_oreo} alt="토핑 4" />
          </div>
          <div className="topping-row row3">
            <img src={ice_oreo} alt="토핑 5" />
            <img src={ice_oreo} alt="토핑 6" />
            <img src={ice_oreo} alt="토핑 7" />
            <img src={ice_oreo} alt="토핑 8" />
          </div>
        </div>
        <div className="topping-slider s2">
          <div className="topping-row row1">
            <img src={ice_oreo} alt="토핑 1" />
          </div>
          <div className="topping-row row2">
            <img src={ice_oreo} alt="토핑 2" />
            <img src={ice_oreo} alt="토핑 3" />
            <img src={ice_oreo} alt="토핑 4" />
          </div>
          <div className="topping-row row3">
            <img src={ice_oreo} alt="토핑 5" />
            <img src={ice_oreo} alt="토핑 6" />
            <img src={ice_oreo} alt="토핑 7" />
            <img src={ice_oreo} alt="토핑 8" />
          </div>
        </div>
        <div className="topping-slider s3">
          <div className="topping-row row1">
            <img src={ice_oreo} alt="토핑 1" />
          </div>
          <div className="topping-row row2">
            <img src={ice_oreo} alt="토핑 2" />
            <img src={ice_oreo} alt="토핑 3" />
            <img src={ice_oreo} alt="토핑 4" />
          </div>
          <div className="topping-row row3">
            <img src={ice_oreo} alt="토핑 5" />
            <img src={ice_oreo} alt="토핑 6" />
            <img src={ice_oreo} alt="토핑 7" />
            <img src={ice_oreo} alt="토핑 8" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Bingsoo;
