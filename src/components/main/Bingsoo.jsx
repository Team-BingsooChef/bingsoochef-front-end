import React,{ Component } from "react";
import strawberry from "/src/assets/bingsoo/strawberry.png";
import chocolate from "/src/assets/bingsoo/chocolate.png";
import mango from "/src/assets/bingsoo/mango.png";
import mincho from "/src/assets/bingsoo/mincho.png";
import malcha from "/src/assets/bingsoo/malcha.png";
import milk from "/src/assets/bingsoo/milk.png";
import ice_oreo from "/src/assets/toppings/ice_oreo.svg";
const Bingsoo = () => {
  return (
<div className="bingsoo-container">
    <div className="bingsoo">
        <img src={mango} alt="빙수 이미지" />
    </div>
    <div className="topping-slider">
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
            <img src={ice_oreo}s alt="토핑 7" />
            <img src={ice_oreo} alt="토핑 8" />
        </div>
    </div>
</div>
  );
};

export default Bingsoo;
