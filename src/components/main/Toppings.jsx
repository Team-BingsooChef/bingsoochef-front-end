import React, { Component } from "react";

import ice_oreo from "/src/assets/toppings/ice_oreo.svg";
class Toppings extends Component {
  render() {
    return (
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
          <img src={ice_oreo} alt="토핑 7" />
          <img src={ice_oreo} alt="토핑 8" />
        </div>
      </div>
    );
  }
}

export default Toppings;
