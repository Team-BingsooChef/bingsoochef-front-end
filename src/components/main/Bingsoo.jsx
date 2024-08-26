import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Main.module.css";

const Bingsoo = ({toppings}) => {
  const [bingsoo, setBingsoo] = useState([]);
  
  console.log("Toppings:", toppings);

  const toppingGroups = [];
  for (let i = 0; i < toppings.length; i += 8) {
    toppingGroups.push(toppings.slice(i, i + 8));
  }
  console.log("ToppingGroups:", toppingGroups);
  
  const getbingsooPath = (bingsoo) => {
    return `/src/assets/bingsoo/${bingsoo}.png`;
  };
  
  const getToppingpath = (topping) => {
    return `/src/assets/toppings/${topping.topping}.svg`;
  };

  const getIceToppingpath = (topping) => {
    return `/src/assets/toppings/ice_${topping.topping}.svg`;
  }

  useEffect(() => {
    // 백엔드에서 토핑 리스트를 가져오는 API 호출
    fetchBingsoo();
  }, []);

  

  const fetchBingsoo = async () => {
    // API 요청 코드 - 실제로는 fetch나 axios를 사용해 데이터를 가져옴
    const samplebingsooData = "strawberry";
    setBingsoo(samplebingsooData);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true, // 드래그 기능 활성화
    swipe: true, 
    swipeToSlide: true, // 슬라이드 스와이프 기능 활성화
    touchThreshold: 10, // 스와이프 감도 설정 (기본값 5, 높을수록 민감함)    // 스와이프 기능 활성화
  };

  return (
    <div className={styles.bingsoo_container}>
      {/* <img className={styles.bingsoo} src={getbingsooPath(bingsoo)} alt="빙수 이미지" /> */}
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {toppingGroups.map((group, index) => (
            <div key={index} className={styles.topping_slider}>
               {group.map((topping, idx) => (
                <div key={idx} className={styles[`row_${idx}`]}>
                <img 
                  src={topping.opened ? getToppingpath(topping) : getIceToppingpath(topping)}
                  alt={topping.from}
                  className={topping.opened ? styles.topping_image : styles.ice_topping_image}
               />
            </div>
          ))}
          </div>
           ))}
        </Slider>
    </div>
  </div>
  );
};

export default Bingsoo;
