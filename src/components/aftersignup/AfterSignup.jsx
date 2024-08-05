import './AfterSignup.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import strawberry from '/src/assets/strawberry.png';
import chocolate from '/src/assets/chocolate.png';
import mango from '/src/assets/mango.png';

const AfterSignup = () => {
  const navigate = useNavigate(); 

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  const goToMain = () => {
    navigate('/main'); 
  };

  return (
    <form className='aftersignup_form'>
      <div className="slider_container">
        <h1>무슨 맛 빙수가 먹고 싶나요?</h1>
        <Slider {...settings}>
          <div className="slide_item">
            <img src={chocolate} alt="초코 빙수" />
            <h3>초코 빙수</h3>
          </div>
          <div className="slide_item">
            <img src={strawberry} alt="딸기 빙수" />
            <h3>딸기 빙수</h3>
          </div>
          <div className="slide_item">
          <img src={mango} alt="망고 빙수" />
            <h3>망고 빙수</h3>
          </div>
          <div className="slide_item">
            <h3>말차 빙수</h3>
          </div>
          <div className="slide_item">
            <h3>연유 빙수</h3>
          </div>
          <div className="slide_item">
            <h3>민초 빙수</h3>
          </div>
        </Slider>
      </div>
      <button type="button" className="complete_button" onClick={goToMain}>완료</button>
    </form>
  );
};

export default AfterSignup;
